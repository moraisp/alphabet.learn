import { Response, NextFunction, Request } from "express";
import { AppService } from "./app.service";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    get(req: Request, res: Response, next: NextFunction): Promise<void>;
}
