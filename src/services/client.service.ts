import { generatorJWT } from "@src/helpers/generator-jwt";
import { CONFIG, MAIL } from "@src/constants/config-global";
import { OTPService } from "./otp.service";
import { AddressesModel, AuthModel, ClientModel, ClientsAddressModel, DocumentModel, DocumentTypesModel } from "@src/models";
import { AuthService } from "./auth.service";
import { ClientCreateEditAttributes, IClientPhoneAttributes, IClientInstance } from "@src/types";
import sequelize from "@src/config/connection";

export class ClientService {


    public async register(email: string) {
        const authService = new AuthService();

        const auth = await AuthModel.create({ email });

        const accessToken = await generatorJWT(
            {
                payload: {
                    authId: auth.getDataValue('id'),
                    uid: null
                },
                expiresIn: CONFIG.EXPIRATED_LAPSE_TIME
            });

        await OTPService.createEmailOTP(auth.getDataValue('id'));

        await authService.sendEmailOTP(
            auth.getDataValue('id'),
            MAIL.TEMPLATES.EMAIL_VERIFICATION,
            MAIL.SUBJECT.EMAIL_VERIFICATION,);

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

        return OTPService.createSendSmsOTP(authId, phoneNumber, countryPrefix);
    }

    public async saveProfile(data: ClientCreateEditAttributes) {
        const transaction = await sequelize.transaction();

        try {
            const {
                authId,
                firstName,
                secondName,
                firstSurname,
                secondSurname,
                countryPrefix,
                phoneNumber,
                birthdayDate,
                genderId,
                addresses
            } = data;

            const client = await ClientModel.create({
                firstName,
                secondName,
                firstSurname,
                secondSurname,
                countryPrefix,
                phoneNumber,
                birthdayDate: new Date(birthdayDate),
                fk_gender_id: genderId,
            },
                { transaction });

            const addressPromises = addresses.map(async (addr) => {
                const address = await AddressesModel.create(
                    {
                        ...addr,
                        fk_country_id: addr.countryId,
                        fk_state_id: addr.stateId,
                    },
                    { transaction }
                );

                await ClientsAddressModel.create(
                    {
                        fk_client_id: client.getDataValue('id'),
                        fk_address_id: address.getDataValue('id'),
                    },
                    { transaction }
                );
            });

            await Promise.all(addressPromises);

            await AuthModel.update(
                { fk_client_id: client.getDataValue('id') },
                { where: { id: authId }, transaction }
            );

            await transaction.commit();

            const clientPlain = client.get({ plain: true });

            clientPlain.genderId = clientPlain.fk_gender_id;
            delete clientPlain.fk_gender_id;

            return clientPlain;
        }
        catch (error: any) {
            await transaction.rollback();
            throw error;
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
}
