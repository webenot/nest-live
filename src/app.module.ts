import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

// Domains
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URI),
    CatsModule,
    DogsModule,
  ],
})
// @ts-ignore
export class AppModule {
}

// @ts-ignore
