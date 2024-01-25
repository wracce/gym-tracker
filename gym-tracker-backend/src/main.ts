import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { User } from './users/entities/user.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    }),
  );

  await app.listen(process.env.DEV_PORT);
}
bootstrap();

declare module 'express-session' {
  interface SessionData {
    userID: number | undefined;
  }
}
