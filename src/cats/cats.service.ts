import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<ICat>) {
  }
  async findAll(): Promise<ICat[]> {
    return await this.catModel.find().exec();
  }
  async create(createCatDto: CreateCatDto): Promise<ICat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }
}
