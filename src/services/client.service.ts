import { generatorJWT } from "@src/helpers/generator-jwt";
import { CONFIG, MAIL } from "@src/constants/config-global";
import { OTPService } from "./otp.service";
import { AddressesModel, AuthModel, ClientModel, ClientsAddressModel, CountriesModel, DocumentModel, DocumentTypesModel, GenderModel, StatesModel, UserModel } from "@src/models";
import { AuthService } from "./auth.service";
import { ClientCreateEditAttributes, IClientPhoneAttributes, IClientInstance, IAuthAttributes, AddressCreateEditAttributes } from "@src/types";
import sequelize from "@src/config/connection";

export class ClientService {


  public async register(email: string, isUpdate = false) {
    const authService = new AuthService();
    let auth: IAuthAttributes;

    if (isUpdate) {
      auth = (await AuthModel.findOne({ where: { email } }))!.get({ plain: true });
    } else {
      auth = (await AuthModel.create({ email })).get({ plain: true });
    }

    const accessToken = await generatorJWT(
      {
        payload: {
          authId: auth.id,
          uid: null
        },
        expiresIn: CONFIG.EXPIRATED_LAPSE_TIME
      });

    if (!isUpdate) {
      await OTPService.createEmailOTP(auth.id);

      await authService.sendEmailOTP(
        auth.id,
        MAIL.TEMPLATES.EMAIL_VERIFICATION,
        MAIL.SUBJECT.EMAIL_VERIFICATION,);
    }

    return { auth, accessToken };
  }

  public async findClientById(clientId: string) {
    return await ClientModel.findByPk(clientId);
  }

  public async findClientByAuthId(authId: string) {
    return await ClientModel.findOne({
      include: [{
        model: AuthModel,
        as: 'auth',
        where: { id: authId },
      }],
    });
  }

  async findClientByEmail(email: string): Promise<IClientInstance | null> {
    return await ClientModel.findOne({
      include: [{
        model: AuthModel,
        as: 'auth',
        where: { email },
      }],
    });
  }

  public async sendPhoneNumber(data: IClientPhoneAttributes) {
    const { authId, phoneNumber, countryPrefix } = data;

    // return OTPService.createSendSmsOTP(authId, phoneNumber, countryPrefix);
  }

  public async verifyPhoneNumber(data: { authId: string, otpCode: string }) {
    const { authId, otpCode } = data;

    if (otpCode !== "123456") {
      throw new Error("Invalid OTP code");
    }

    await AuthModel.update({ isPhoneVerified: true }, { where: { id: authId } });

    const auth = await AuthModel.findByPk(authId);

    if (auth && !auth.getDataValue('fk_client_id')) {
      const gender = await GenderModel.findOne();
      if (!gender) {
        throw new Error("No genders found in the database.");
      }
      const newClient = await ClientModel.create({
        firstName: "",
        firstSurname: "",
        birthdayDate: new Date(),
        fk_gender_id: gender.getDataValue('id'),
      });
      await auth.update({ fk_client_id: newClient.getDataValue('id') });
    }
  }

  public async saveProfile(data: ClientCreateEditAttributes) {
    // const transaction = await sequelize.transaction();

    try {
      const {
        authId,
        addresses,
        clientId,
        ...clientData
      } = data;

      let currentClientId = clientId || '';

      // construir payload de cliente
      const formNewEditClient = {
        firstName: clientData.firstName ?? '',
        secondName: clientData.secondName ?? '',
        firstSurname: clientData.firstSurname ?? '',
        secondSurname: clientData.secondSurname ?? '',
        birthdayDate: new Date(clientData.birthdayDate) ?? new Date(),
        fk_gender_id: clientData.genderId ?? null,
        ...(clientData.countryPrefix && { countryPrefix: clientData.countryPrefix }),
        ...(clientData.phoneNumber && { phoneNumber: clientData.phoneNumber }),
      }

      if (currentClientId) {
        await ClientModel.findByPk(currentClientId)
      } else {
        const createdClient = await ClientModel.create(formNewEditClient);
        currentClientId = createdClient.getDataValue('id');
        await this.updateAuthById(authId, { fk_client_id: currentClientId });
      }

      if (addresses && addresses.length > 0) {
        await this.saveAddresses(currentClientId, addresses)
      }

      const foundClient = await this.findClientAndAddressesByClientId(currentClientId);

      // await transaction.commit();

      return foundClient
    } catch (error: any) {
      console.log("🚀 ~ ClientService ~ saveProfile ~ error:", JSON.stringify(error))
      // await transaction.rollback();
      throw error;
    }
  }

  public async saveAddresses(
    clientId: string,
    addresses: AddressCreateEditAttributes[]
  ) {
    await ClientsAddressModel.destroy({ where: { fk_client_id: clientId } });
    const addressesIds = await Promise.all(
      addresses.map(async (addr) => {
        const address = await AddressesModel.create(
          {
            ...addr,
            fk_country_id: addr?.countryId ?? null,
            fk_state_id: addr?.stateId ?? null,
          },
        );
        return address.getDataValue('id');
      })
    );

    await ClientsAddressModel.bulkCreate(
      addressesIds.map((addressId: string) => ({
        fk_client_id: clientId,
        fk_address_id: addressId,
      })),
    );
  }

  public async findClientAndAddressesByClientId(clientId: string): Promise<any | null> {
    try {
      const foundClient = await ClientModel.findByPk(clientId)
      const currentClient = foundClient?.get({ plain: true }) || null;

      const foundAddresses = await ClientsAddressModel.findAll({
        where: { fk_client_id: clientId },
        include: [
          {
            model: AddressesModel,
            as: 'address',
            include: [CountriesModel, StatesModel]
          }
        ]
      }) || [];

      return {
        ...(currentClient && { ...currentClient }),
        addresses: foundAddresses.map(addr => addr.get({ plain: true })).map((addr) => addr.address) || [],
      }
    } catch (error) {
      return null
    }
  }

  public async saveDocuments(
    authId: string,
    files: any,
    body: {
      dniType: string;
      dniNumber: string;
      dniExpirationDate: string;
    }
  ) {

    const client = await ClientModel.findOne({ where: { authId } });
    if (!client) throw new Error("Cliente no encontrado");

    // 2. Encuentra el tipo de documento
    const docType = await DocumentTypesModel.findOne({ where: { code: body.dniType } });
    if (!docType) throw new Error("Tipo de documento inválido");

    // 3. Para cada archivo, súbelo y guarda en la BD
    const created: any[] = [];
    for (const f of files) {

      // const fileUrl = await this.s3.uploadDocument(f.buffer, f.originalname, f.mimetype);

      // Guarda el registro en Documents
      const rec = await DocumentModel.create({
        fk_client_id: client.getDataValue('id'),
        fk_doc_type_id: docType.getDataValue('id'),
        number: body.dniNumber,
        expirationDate: new Date(body.dniExpirationDate),
        // fileUrl,            // TODO
      } as any);

      created.push(rec);
    }

    return created;
  }

  async updateAuthById(id: string, data: Partial<IAuthAttributes>, transaction?: any) {
    return await AuthModel.update(data, { where: { id }, transaction });
  }
}
