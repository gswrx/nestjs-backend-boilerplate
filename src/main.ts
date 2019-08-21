import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { constants } from './constants';
import * as helmet from 'helmet';

async function bootstrap() {
  // Create the app
  const app = await NestFactory.create(AppModule);
  // Helmet security:
  // - dnsPrefetchControl
  // - frameguard
  // - hidePoweredBy
  // - hsts
  // - ieNoOpen
  // - noSniff
  // - xssFilter
  // more info: https://helmetjs.github.io/docs/
  app.use(helmet());
  // Enable Cross-origin resource sharing
  app.enableCors();
  // Start listening on port number defined in constants
  await app.listen(constants.httpPort);
}
bootstrap();
