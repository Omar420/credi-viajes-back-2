
import { Model, Optional } from 'sequelize';
// ----------------------------------------------------------------
import { IBaseEntity, IBasePagination } from './default.type';

export interface IRoleAttributes extends IBaseEntity {
    name: string;
    code: string;
}

export interface IRolePagination extends Partial<IBasePagination> {
    search?: string;
    notCode?: boolean;
    code?: string;
}


export type RoleCreationAttributes = Optional<IRoleAttributes, keyof IRoleAttributes>;

export interface IRoleInstance extends Model<IRoleAttributes, RoleCreationAttributes> { }