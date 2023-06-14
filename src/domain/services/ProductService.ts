import { Product } from "../models/Product";
import { ProductRepository } from "../repositories/ProductRepository";

export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getProduct(id: string): Promise<Product | undefined> {
    return this.productRepository.findById(id);
  }

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async createProduct(product: Product): Promise<void> {
    return this.productRepository.create(product);
  }

  async updateProduct(product: Product): Promise<void> {
    return this.productRepository.update(product);
  }

  async deleteProduct(id: string): Promise<void> {
    return this.productRepository.delete(id);
  }
}
