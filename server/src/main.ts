import "dotenv/config"
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Stubs } from "./shared"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // Validate DTO and Params
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );

  // CORS
  app.enableCors();

  // Documentation
  const config = new DocumentBuilder()
    .setTitle('CRUD APP')
    .setDescription('CRUD API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  });

  const port = process.env.PORT || 3000;

  await app.listen(port);
}
bootstrap();
