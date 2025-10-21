import express from "express";
import {
  addProduct,
  listProducts,
  deleteProduct,
  singleProduct,
} from "../controllers/product.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post(
  "/add",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  adminAuth,
  addProduct
);
productRouter.delete("/delete/:id", adminAuth, deleteProduct);
productRouter.get("/single/:id", singleProduct);
productRouter.get("/list", listProducts);

export default productRouter;
