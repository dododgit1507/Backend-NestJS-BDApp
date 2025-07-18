import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/V1');
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove properties that are not in the dto
    forbidNonWhitelisted: true, // Return error if there are properties that are not in the dto
    transform: true, // Transform the data to the type of the dto
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
