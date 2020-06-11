import { Controller, Get, Res, Headers, Req, Next, Query } from "@nestjs/common";
import { Response, NextFunction, Request } from "express";
import { AppService } from "./app.service";
import url from 'url';
import proxy from 'express-http-proxy';
import path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {

  }


  @Get('*')
  async get(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction
  ): Promise<void> {
    if (req.url.includes('/api')) return next();

    const splits = req.url?.split('/');
    const file = splits[splits.length - 1];
    const isFile = (file.includes('.') && !file.includes('.html'))

    if (process.env.NODE_ENV !== 'development') {
      if(isFile) return next();
      res.sendFile(path.join(__dirname, '../../web/dist', 'index.html'));
    } else {
      let handler = proxy('http://localhost:8080', {
        proxyReqPathResolver: function (req) {
          const reqUrl = url.parse(req.url);
          if(isFile) 
            return reqUrl.path;
          else
            return '/' + reqUrl.path.replace(reqUrl.pathname, '');
        }
      });
      handler(req, res, next);
    }
  }
}