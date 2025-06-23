import "express";

declare module "express" {
    export interface Request {
        uid?: string;
        roleCode?: string;
        isSuperAdmin?: boolean;
        authId?: string;

        clientId?: string;
        email?: string;

        userId?: string;
    }
}