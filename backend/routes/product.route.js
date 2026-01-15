import express from "express";

const router = express.Router();

import { getProducts } from "../controllers/product.controller.js";
import { createProduct } from "../controllers/product.controller.js";
import { updateProduct } from "../controllers/product.controller.js";
import { deleteProduct } from "../controllers/product.controller.js";

router.get("/", getProducts);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);


export default router;