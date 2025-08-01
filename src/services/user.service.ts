import { AuthModel, RolesModel, UserModel } from "@src/models";
import { AuthCreateEditAttributes, IUserAttributes, IUserInstance, IUserPagination, UserCreateEditAttributes } from "@src/types";
import { Includeable, Op } from "sequelize";


export class UserService {

    private includes: Includeable[];

    constructor() {
        this.includes = [
            { model: RolesModel, as: "role" },
            { model: AuthModel, as: "auth" }
        ];
    }

    async createUser(data: UserCreateEditAttributes): Promise<IUserAttributes> {
        const { username, email, password, roleId, type, ...userData } = data;

        const user = await UserModel.create({
            ...userData,
            fk_role_id: roleId
        });
        const userId = user.get("id") as string;

        const auth = await AuthModel.create({
            username,
            email,
            password,
            type,
            fk_user_id: userId
        });

        const fullUser = await UserModel.findByPk(userId, {
            include: this.includes,
        });

        return fullUser!.get({ plain: true }) as IUserAttributes;
    }

    async updateUserAndAuth(
        id: string,
        data: Partial<UserCreateEditAttributes>
    ): Promise<boolean> {
        const { username, email, password, lastSession, ...userData } = data;

        const [userUpdated] = await UserModel.update(userData, {
            where: { id },
        });

        const authUpdate: Partial<AuthCreateEditAttributes> = {};
        if (username) authUpdate.username = username;
        if (email) authUpdate.email = email;
        if (password) authUpdate.password = password;
        if (lastSession) authUpdate.lastSession = lastSession;

        if (Object.keys(authUpdate).length > 0) {
            await AuthModel.update(authUpdate, {
                where: { fk_user_id: id },
            });
        }

        return userUpdated > 0;
    }

    async findUserById(id: string): Promise<IUserAttributes | null> {
        const user = await UserModel.findByPk(id, {
            include: this.includes,
        });
        return user ? user.get({ plain: true }) : null;
    }

    async findAllAndCountOperatorUsers(
        params: IUserPagination
    ): Promise<{ rows: IUserInstance[]; count: number }> {
        const {
            limit,
            page = 0,
            roleId,
            search,
            deleted,
            roleCode,
        } = params;

        const where = {
            deleted: deleted ?? false,
            ...(roleId && { roleId }),
            ...(search && {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${search}%` } },
                    { surname: { [Op.iLike]: `%${search}%` } },
                    { username: { [Op.iLike]: `%${search}%` } },
                    { email: { [Op.iLike]: `%${search}%` } },
                ],
            }),
        };

        const users = await UserModel.findAndCountAll({
            order: [["createdAt", "DESC"]],
            ...(limit && {
                offset: page * limit,
                limit,
            }),
            include: [
                {
                    model: RolesModel,
                    ...(roleCode && {
                        where: {
                            code: {
                                [Op.in]: roleCode
                            }
                        }
                    })
                }
            ],
            attributes: {
                exclude: ["password"],
            },
            where,
        });

        return users;
    }

    async findAllAndCountUsers(
        params: IUserPagination
    ): Promise<{ rows: IUserInstance[]; count: number }> {
        const {
            limit,
            page = 0,
            roleId,
            search,
            deleted,
            roleCode,
        } = params;

        const where = {
            deleted: deleted ?? false,
            ...(roleId && { roleId }),
            ...(search && {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${search}%` } },
                    { surname: { [Op.iLike]: `%${search}%` } },
                    { username: { [Op.iLike]: `%${search}%` } },
                    { email: { [Op.iLike]: `%${search}%` } },
                ],
            }),
        };

        const users = await UserModel.findAndCountAll({
            order: [["createdAt", "DESC"]],
            ...(limit && {
                offset: page * limit,
                limit,
            }),
            include: [
                {
                    model: RolesModel,
                    ...(roleCode && {
                        where: {
                            code: {
                                [Op.notIn]: roleCode
                            }
                        }
                    })
                }
            ],
            attributes: {
                exclude: ["password"],
            },
            where,
        });

        return users;
    }

    async findUserByUsername(username: string): Promise<IUserInstance | null> {
        return await UserModel.findOne({
            include: [{
                model: AuthModel,
                as: 'auth',
                where: { username },
            }],
        });
    }
    async findUserByEmail(email: string): Promise<IUserInstance | null> {
        return await UserModel.findOne({
            include: [{
                model: AuthModel,
                as: 'auth',
                where: { email },
            }],
        });
    }

    async findUserByAuthId(authId: string): Promise<IUserInstance | null> {
        return await UserModel.findOne({
            include: [{
                model: AuthModel,
                as: 'auth',
                where: { id: authId },
            }],
        });
    }


    async findUserLoggedById(id: string): Promise<IUserInstance | null> {
        return await UserModel.findByPk(id, {
            attributes: {
                exclude: ["auth"],
            },
        });
    }
}