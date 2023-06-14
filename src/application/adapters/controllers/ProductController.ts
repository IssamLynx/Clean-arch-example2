import { Request, Response } from "express";
import { ProductService } from "../../../domain/services/ProductService";

export class ProductController {
  constructor(private readonly productService: ProductService) {}

  async getProduct(req: Request, res: Response): Promise<void> {
    const productId = req.params.id;
    const product = await this.productService.getProduct(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  }

  async getAllProducts(req: Request, res: Response): Promise<void> {
    const products = await this.productService.getAllProducts();
    res.json(products);
  }

  async createProduct(req: Request, res: Response): Promise<void> {
    const product = req.body;
    await this.productService.createProduct(product);
    res.status(201).end();
  }

  async updateProduct(req: Request, res: Response): Promise<void> {
    const productId = req.params.id;
    const updatedProduct = req.body;
    await this.productService.updateProduct({
      id: productId,
      ...updatedProduct,
    });
    res.status(204).end();
  }

  async deleteProduct(req: Request, res: Response): Promise<void> {
    const productId = req.params.id;
    await this.productService.deleteProduct(productId);
    res.status(204).end();
  }
}
