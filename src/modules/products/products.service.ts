import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) readonly productRepository: Repository<Product>){}
  
  async create(createProductDto: CreateProductDto) {
    try{
      const newProduct = this.productRepository.create(createProductDto)
      await this.productRepository.save(newProduct)
    }catch(error){
      Logger.error(`${HttpStatus.INTERNAL_SERVER_ERROR}`, `${error}`)
      return {statusbar: HttpStatus.INTERNAL_SERVER_ERROR, message: `help!`, error}
    }
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}