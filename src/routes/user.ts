const User = require("../model/user");
const userRouter = require("express").Router();
// import mongoose from 'mongoose';

userRouter.post(
  "/",
  async (
    req: { body: any },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: any): void; new (): any };
      };
    }
  ) => {
    console.log(req.body);
    const newUser = new User(req.body);
    try {
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

userRouter.get(
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
      const user = await User.findOne({ userId: req.params.userId });
      // const { password, ...others } = user._doc;
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

userRouter.delete(
  "/delete/:userId",
  async (
    req: { params: { userId: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: any): void; new (): any };
      };
    }
  ) => {
    try {
      await User.deleteOne({ userId: req.params.userId });
      res.status(200).json("User deleted Successfully!!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

module.exports = userRouter;
