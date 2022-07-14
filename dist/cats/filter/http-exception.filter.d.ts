import { ExceptionFilter, ArgumentsHost, HttpException } from "@nestjs/common";
export declare class HttpFilterException implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
