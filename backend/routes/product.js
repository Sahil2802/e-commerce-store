import express from "express";
import {
  addProduct,
  listProducts,
  deleteProduct,
  singleProduct,
} from "../controllers/product.js";
import upload from "../middleware/multer.js";

const productRouter = express.Router();

productRouter.post(
  "/add",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.delete("/delete/:id", deleteProduct);
productRouter.get("/single/:id", singleProduct);
productRouter.get("/list", listProducts);

export default productRouter;
