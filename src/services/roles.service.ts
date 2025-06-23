import { RolesModel } from '@src/models';
import { IRoleInstance } from '@src/types';


export class RoleService {
    constructor() { }

    async findRoleById(roleId: string): Promise<IRoleInstance | null> {
        return await RolesModel.findByPk(roleId)
    }

    async findRoleByCode(code: string) {
        return await RolesModel.findOne({ where: { code } })
    }
}