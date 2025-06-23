import { Model, Optional } from 'sequelize';
import { IBaseEntity, IBasePagination } from './default.type';


export interface IClientAttributes extends IBaseEntity {
    firstName: string;
    secondName?: string | null;
    firstSurname: string;
    secondSurname: string;
    countryPrefix: string;
    phoneNumber: string;
    birthdayDate: Date;

    genderId: string;
    authId: string;
}

export interface ClientCreateEditAttributes {

    firstName: string;
    secondName?: string;
    firstSurname: string;
    secondSurname?: string;
    countryPrefix: string;
    phoneNumber: string;
    birthdayDate: Date | string;

    genderId: string;
    authId: string;

    addresses: AddressCreateEditAttributes[];
}

export interface AddressCreateEditAttributes {

    city: string;
    address?: string;
    zipCode: string;
    countryId: string;
    stateId: string;
}


export interface IClientPhoneAttributes {
    authId: string;
    countryPrefix: string;
    phoneNumber: string;
}

/**
 * Tipo para creación: todos los atributos de IClientAttributes 
 * son opcionales excepto los obligatorios.
 */
export type ClientCreationAttributes = Optional<
    IClientAttributes,
    keyof IBaseEntity | 'secondName' | 'deleted'
>;

/**
 * Instancia de cliente para Sequelize.
 */
export interface IClientInstance
    extends Model<IClientAttributes, ClientCreationAttributes> { }


export interface IClientPagination extends Partial<IBasePagination> {
    search?: string;          // búsqueda por nombre o teléfono
    deleted?: boolean;
}
