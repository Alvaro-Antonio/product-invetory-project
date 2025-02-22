import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { DataBaseModule } from './configs/database.module';

@Module({
  imports: [
    ProductsModule, CategoryModule, DataBaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
