import path from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppService } from './app.service';

@Module({
  imports: [ 
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname,  '../../../web/dist'),
    })
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
  exports: [ ]
})
export class AppModule {} 

