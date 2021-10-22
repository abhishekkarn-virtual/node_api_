const Product = require("../model/product");

const routerProduct = require("express").Router();

//add product

routerProduct.post(
  "/",
  async (
    req: { body: any },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: unknown): void; new (): any };
      };
    }
  ) => {
    const newProduct = new Product(req.body);

    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

//update product

routerProduct.patch(
  "/update/:productId",
  async (
    req: { params: { productId: any }; body: any },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: unknown): void; new (): any };
      };
    }
  ) => {
    try {
      Product.updateOne({ productId: req.params.productId }, req.body);
      res.status(200).json("Product Updated Successfully!!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

//delete product

routerProduct.delete(
  "/:productId",
  async (
    req: { body: { productId: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: string): void; new (): any };
        jdon: { (arg0: unknown): void; new (): any };
      };
    }
  ) => {
    try {
      Product.findOneAndDelete({ productId: req.body.productId });
      res.status(200).json("Product deleted successfully!");
    } catch (err) {
      res.status(500).jdon(err);
    }
  }
);

//get a product

routerProduct.get(
  "/find/:productId",
  async (
    req: { params: { productId: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: unknown): void; new (): any };
      };
    }
  ) => {
    try {
      const product = await Product.findOne({
        productId: req.params.productId,
      });
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

routerProduct.get(
  "/all",
  async (
    req: any,
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: unknown): void; new (): any };
      };
    }
  ) => {
    console.log("get all");
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

module.exports = routerProduct;
