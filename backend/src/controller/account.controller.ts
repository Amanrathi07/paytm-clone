import type { Request, Response } from "express";
import accountModel from "../model/account.model.js";
import mongoose from "mongoose";

export async function transfer(req: Request, res: Response) {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const { toAccount, ammount } = req.body;

    const userAccountInfo = await accountModel
      .findOne({
        //@ts-ignore
        userId: req.id,
      })
      .session(session);

    //@ts-ignore
    if (!userAccountInfo || userAccountInfo.balance < ammount) {
      await session.abortTransaction();
      await session.endSession();

      return res.status(400).json({ message: "insufficient balance" });
    }
    const reseverInfo = await accountModel
      .findOne({
        userId: toAccount,
      })
      .session(session);
    if (!reseverInfo) {
      await session.abortTransaction();
      await session.endSession();

      return res.status(400).json({ message: "receiver account not found"});
    }

    // main logic
    await accountModel.updateOne(
      //@ts-ignore
      { userId: req.id },
      { $inc: { balance: -ammount } },
      { session }
    );

    await accountModel.updateOne(
      { userId: toAccount },
      { $inc: { balance: ammount } },
      { session }
    );

    await session.commitTransaction();
    await session.endSession();
    return res.status(200).json({ message: "transaction successful" });
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();

    console.log("transfer function error :", error);
    return res.status(500).json({ message: "internal server error" });
  }
}
