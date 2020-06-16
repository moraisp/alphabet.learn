// import packageJson = require('../package.json');
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Config } from '@models/mongo/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  
  const configService = app.get(ConfigService);
  console.log(`bootstrap -> configService.get<number>('alphabet.port')`, configService.get<number>('alphabet.port'))
  await app.listen(configService.get<number>('alphabet.port'), null);
}

bootstrap();
