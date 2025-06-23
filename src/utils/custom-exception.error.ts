export class CustomError extends Error {
    public status: 'error' | 'fail';
    public statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode >= 500 ? 'error' : 'fail';
        Error.captureStackTrace(this, this.constructor);
    }
}
