import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AuthorModule } from './auth.module';
async function bootstrap() {
  const app = await NestFactory.create(AuthorModule);
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
