import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS

  
  // TODO Validators
  // * Es para validar los datos que se envian en las peticiones de los controladores y servicios
  // * de la aplicacion y los transforma a los tipos de datos que se necesitan en la aplicacion
  // * (por ejemplo, si se envia un string y se necesita un number, lo transforma a number)
  // ? npm install class-validator class-transformer
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  await app.listen(3000);
}
bootstrap();
