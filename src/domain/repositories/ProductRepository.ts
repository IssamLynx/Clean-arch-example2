import { Product } from "../models/Product";

export interface ProductRepository {
  findById(id: string): Promise<Product | undefined>;
  findAll(): Promise<Product[]>;
  create(product: Product): Promise<void>;
  update(product: Product): Promise<void>;
  delete(id: string): Promise<void>;
}
