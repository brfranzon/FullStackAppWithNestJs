import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import config from './config/keys';
@Module({
  imports: [ItemsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [],
  providers: [],
})
export class  AppModule {}
