import { CountriesModel, GenderModel, StatesModel } from "@src/models";
import { FindCountriesParams } from "@src/types";
import { Op } from "sequelize";

export class UtilService {

    async findAndCountAllGenders() {
        return await GenderModel.findAndCountAll({
            order: [["name", "ASC"]],
        });
    }

    async findAndCountAllCountries(params: FindCountriesParams = {}) {
        const { search, includeStates } = params;

        const whereClause = search
            ? {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${search}%` } },
                    { code: { [Op.iLike]: `%${search}%` } },
                ],
            }
            : {};

        return await CountriesModel.findAndCountAll({
            where: whereClause,
            order: [["name", "ASC"]],
            include: includeStates !== false
                ? [
                    {
                        model: StatesModel,
                        as: "states",
                        attributes: {
                            exclude: [
                                "fk_country_id",
                                "createdAt",
                                "updatedAt"
                            ]
                        }
                    },
                ]
                : [],
        });
    }

}