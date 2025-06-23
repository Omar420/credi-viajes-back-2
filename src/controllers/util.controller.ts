import { Request, Response } from "express";

import { UtilService } from "@src/services";


export async function getGenders(req: Request, res: Response) {
    try {
        const utilService = new UtilService();
        const genders = await utilService.findAndCountAllGenders();

        return res.status(200).json({
            status: "success",
            message: "Géneros obtenidos correctamente",
            data: genders,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al obtener géneros",
            error,
        });
    }
}

export async function getCountries(req: Request, res: Response) {
    try {
        const utilService = new UtilService();
        const { query } = req;

        const includeStates = query.includeStates === 'true';

        const countries = await utilService.findAndCountAllCountries({
            ...query,
            includeStates,
        });


        return res.status(200).json({
            status: "success",
            message: "Paises obtenidos correctamente",
            data: countries,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al obtener paises",
            error,
        });
    }
}