export interface IProduct {
    id?: string;
    name: string;
    description?: string;
    amount: number;
    stock_qty: number;
    deleted?: boolean;
    fk_category_id: string;
    fk_created_by_id?: string;
    fk_updated_by_id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
