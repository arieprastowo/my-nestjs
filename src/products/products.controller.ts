import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';

@Controller({path: 'products'})
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService
  ) {
  }
  @Post()
  create(@Body() createProductDto: CreateProductDto): string {
    this.productsService.create(createProductDto)
    return 'this action will create a new product'
  }
  @Get()
  findAll(): Product[] {
    return this.productsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `This action returns a #${id} product`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): string {
    return `This action updates a #${id} product`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes a #${id} product`;
  }
}
