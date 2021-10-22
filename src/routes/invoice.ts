const Invoice = require("../model/invoice");
const invoiceRouter = require("express").Router();

invoiceRouter.post(
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
    const newOrder = new Invoice(req.body);

    try {
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

//UPDATE
invoiceRouter.put(
  "/update/:userId",
  async (
    req: { params: { userId: any }; body: any },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: unknown): void; new (): any };
      };
    }
  ) => {
    try {
      const updatedOrder = await Invoice.findByIdAndUpdate(
        req.params.userId,
        {
          $push: {
            products: req.body,
          },
        },
        { new: true }
      );
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

//DELETE
invoiceRouter.delete(
  "/:userId",
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
      await Invoice.deleteOne({ userId: req.params.userId });
      res.status(200).json("Invoice has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

//GET USER ORDERS
invoiceRouter.get(
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
      const orders = await Invoice.find({ userId: req.params.userId });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

// //GET ALL

invoiceRouter.get(
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
    try {
      const orders = await Invoice.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

module.exports = invoiceRouter;
