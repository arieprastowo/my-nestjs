import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = []

  create(product: Product): void {
    this.products.push(product)
  }

  findAll(): Product[] {
    return this.products
  }
}
