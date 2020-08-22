import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

// Domains
import { CatsModule } from './cats/cats.module';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URI),
    CatsModule,
  ],
})
export class AppModule {
}
