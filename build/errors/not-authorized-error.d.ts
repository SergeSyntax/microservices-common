import { CustomError } from './custom-error';
export declare class NotAuthorizedError extends CustomError {
    statusCode: number;
    static message: string;
    constructor();
    serializeErrors(): {
        message: string;
        field?: string | undefined;
    }[];
}
