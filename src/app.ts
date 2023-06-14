import express from "express";
import { ProductController } from "./application/adapters/controllers/ProductController";
import { ProductPersistence } from "./infrastructure/persistence/ProductPersistence";
import { ProductService } from "./domain/services/ProductService";

const app = express();
const productPersistence = new ProductPersistence();
const productService = new ProductService(productPersistence);
const productController = new ProductController(productService);

app.use(express.json());

app.get("/products", productController.getAllProducts.bind(productController));
app.get("/products/:id", productController.getProduct.bind(productController));
app.post("/products", productController.createProduct.bind(productController));
app.put(
  "/products/:id",
  productController.updateProduct.bind(productController)
);
app.delete(
  "/products/:id",
  productController.deleteProduct.bind(productController)
);

app.listen(5002, () => {
  console.log("Server started on port 50022");
});
