export class CustomError extends Error {
    public status: 'error' | 'fail';
    public statusCode: number;
    public errors: Record<string, any>;

    constructor(message: string, statusCode: number, errors: Record<string, any> = {}) {
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode >= 500 ? 'error' : 'fail';
        this.errors = errors;
        Error.captureStackTrace(this, this.constructor);
    }

    getErrors() {
        return this.errors;
    }
}
