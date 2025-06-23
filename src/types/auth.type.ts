import { IBaseEntity } from ".";

export interface IAuthParams {
    uid?: string;
    authId?: string;
    clientId?: string;
}

export interface IAuthAttributes extends IBaseEntity {
    username: string;
    email: string;
    password?: string;
    lastSession: string | Date;
    sessionLimit: number;

    isEmailVerified: boolean;
    isPasswordCreated: boolean;
    isPhoneVerified: boolean;


    type: AuthType;
    // FK
    userId: string;
}

export interface AuthCreateEditAttributes {
    username: string;
    email: string;
    password?: string;
    lastSession?: string | Date;
    userId: string;
    sessionLimit: number;

    isEmailVerified: boolean;
    isPasswordCreated: boolean;
    isPhoneVerified: boolean;

    type: AuthType;
}

export enum AuthType {
    CLIENT = "client",
    USER = "user",
}

export type AuthFlag =
    | 'isEmailVerified'
    | 'isPhoneVerified'
    | 'isPasswordCreated';