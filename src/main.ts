import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3000', // allow only specific origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // allowed methods
    credentials: true, // allow credentials
  });

  // Set global prefix for all routes
  app.setGlobalPrefix('api');

  await app.listen(5000);
}
bootstrap();
