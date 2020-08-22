import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { ICat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {
  }

  @Get()
  async findAll(): Promise<ICat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<ICat> {
    return this.catsService.create(createCatDto);
  }
}
