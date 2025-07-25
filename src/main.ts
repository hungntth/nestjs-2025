import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';
import { LoginGuard } from './login.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('before>>', req.url);
    next();
    console.log('after');
  });

  app.useGlobalGuards(new LoginGuard());

  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
