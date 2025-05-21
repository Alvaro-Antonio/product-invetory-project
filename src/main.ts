import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { accessSync, constants, existsSync } from 'fs';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
 


  const config = new DocumentBuilder()
    .setTitle('Products API')
    .setDescription('The products API description')
    .setVersion('1.0')
    .addTag('products')
    .build();
    
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  const directoryPath = 'src/configs/database/images/';

  try {
    accessSync(directoryPath, constants.R_OK | constants.W_OK);
    console.log(`O diretório ${directoryPath} tem permissões de leitura e escrita.`);
  } catch (err) {
    console.error(`O diretório ${directoryPath} não tem permissões adequadas:`, err.message);
  }

  const staticAssetsPath = join(__dirname, '..', 'src/configs/database/images');

  if (existsSync(staticAssetsPath)) {
    app.useStaticAssets(staticAssetsPath, {
      prefix: '/images/',
    });
  } else {
    console.warn(`Static assets directory does not exist: ${staticAssetsPath}`);
  }



  app.enableCors({ 
    origin: '*', // Permite qualquer origem (⚠️ Apenas para desenvolvimento!)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
