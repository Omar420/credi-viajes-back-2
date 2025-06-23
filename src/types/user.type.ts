import { Model, Optional } from "sequelize";
import { IAuthAttributes, IBaseEntity, IBasePagination, IRoleAttributes } from ".";

export interface IUserAttributes extends IBaseEntity {
    name: string;
    surname: string;
    phoneNumber: string;
    deleted: boolean;
    // FK
    roleId: string;
    role: IRoleAttributes;

    auth?: IAuthAttributes;

    createdBy?: string | null;
    updatedBy?: string | null;
}

export interface UserCreateEditAttributes {
    name: string;
    surname: string;
    phoneNumber: string;

    roleId: string;
    deleted?: boolean;

    //* Auth
    username?: string;
    email?: string;
    password?: string;
    lastSession?: string | Date;
    type: string;
    createdBy?: string | null;
    updatedBy?: string | null;
}

export type UserCreationAttributes = Optional<
    IUserAttributes,
    keyof IUserAttributes
>;

export interface IUserInstance
    extends Model<IUserAttributes, UserCreationAttributes> { }

export interface IUserPagination extends Partial<IBasePagination> {
    search?: string;
    roleId?: string;
    deleted?: boolean;
    roleCode?: string[];
}