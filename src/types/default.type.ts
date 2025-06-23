export interface IBaseEntity {
    id: string;
    deleted: boolean;
    createdAt: string | Date;
    updatedAt: string | Date;
}

export interface IBasePagination {
    page: number;
    limit: number;
}
