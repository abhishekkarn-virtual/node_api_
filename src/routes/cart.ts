const Cart = require("../model/cart");
const cartRouter = require("express").Router();

//create
cartRouter.post(
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
    const newCart = new Cart(req.body);

    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

//UPDATE
cartRouter.put(
  "/update/:userId",
  async (
    req: { params: { userId: string }; body: any },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: unknown): void; new (): any };
      };
    }
  ) => {
    try {
      const updatedCart = await Cart.updateOne(
        { userId: req.params.userId },
        {
          $push: {
            products: req.body,
          },
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

//DELETE
cartRouter.delete(
  "/delete/:userId",
  async (
    req: { params: { userId: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: unknown): void; new (): any };
      };
    }
  ) => {
    try {
      await Cart.deleteOne({ userId: req.params.userId });
      res.status(200).json("Cart has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

//GET USER CART
cartRouter.get(
  "/find/:userId",
  async (
    req: { params: { userId: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: unknown): void; new (): any };
      };
    }
  ) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

// //GET ALL

cartRouter.get(
  "/",
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
    try {
      const carts = await Cart.find();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

module.exports = cartRouter;
