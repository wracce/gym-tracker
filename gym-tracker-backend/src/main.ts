import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { User } from './users/entities/user.entity';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      // rolling: true,
      cookie: { maxAge: 1000 * 60 * 60 * 24 },
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
