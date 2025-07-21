import { Request } from "express";

export interface AuthenticatedRequest extends Request {
    uid?: string;
    roleCode?: string;
    isSuperAdmin?: boolean;
    authId?: string;

    clientId?: string;
    email?: string;

    userId?: string;
    
    // Puedes agregar más propiedades según lo que agregue tu middleware
}
