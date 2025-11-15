import bcrypt from "bcryptjs";
import type { Request, Response } from "express";
import userModel from "../model/auth.model.js";
import jwt_generate from "../utils/jwt.utils.js";
import accountModel  from "../model/account.model.js";

export async function getAllUser(req: Request, res: Response) {
  try {
    //@ts-ignore
    if (!req.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    //@ts-ignore
    const myid = req.id;
    const allUser = await userModel
      .find({ _id: { $ne: myid } })
      .select("-password");
    return res.status(200).json({ allUser });
  } catch (error) {
    console.log("getAllUser function error", error);
    return res.status(500).json({ message: "internal server error" });
  }
}

export async function signUp(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email: email });
    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields are required" });

    if (existingUser)
      return res.status(404).json({ message: "user alrady  exist " });
    const hassPassword = await bcrypt.hash(password, 5);
    const newUser = new userModel({
      name,
      email,
      password: hassPassword,
    });

    await newUser.save();
    await accountModel.create({
      balance: 100,
      userId: newUser._id,
    });
    jwt_generate(newUser._id, res);

    return res.status(200).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("SignUp function error:", error);
    return res.status(500).json({ message: "nternal server error" });
  }
}

export async function signIn(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const userData = await userModel
      .findOne({ email: email })
      .select("+password");

    if (!userData) {
      return res.status(404).json({ message: "user dosn't exist" });
    }
    //@ts-ignore
    const isPasswordCorrect = await bcrypt.compare(password, userData.password);

    if (isPasswordCorrect) {
      jwt_generate(userData._id, res);
      return res.status(200).json({ message: "login successfully" });
    }
    return res.status(404).json({ message: "password is incorrect" });
  } catch (error) {
    console.error("SignIn function error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

interface updateDataTypes {
  name?: string;
  password?: string;
  email?: string;
}

export async function changeUserData(req: Request, res: Response) {
  try {
    const { newName, newEmail, newPassword } = req.body;

    const updateData: updateDataTypes = {};
    if (newName) updateData.name = newName;
    if (newEmail) updateData.email = newEmail;
    if (newPassword) {
      updateData.password = await bcrypt.hash(newPassword, 10);
    }
    //@ts-ignore
    const userData = await userModel.findByIdAndUpdate(req.id, updateData);
    return res.status(200).json({
      message: "user data updated",
    });
  } catch (error) {
    console.log("changeUserData function error ", error);
    return res.status(500).json({ message: "internal server error" });
  }
}

export async function deleatUser(req: Request, res: Response) {
  try {
    //@ts-ignore
    const dbResponce = await userModel.findByIdAndDelete(req.id);
    if (!dbResponce) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User successfully deleted" });
  } catch (error) {
    console.log("deleatUser function error ", error);
    return res.status(500).json({ message: "internal server error" });
  }
}

export async function userInfo(req: Request, res: Response) {
  try {
    const userData = await userModel.findOne({
      //@ts-ignore
      _id: req.id,
    }).select("-password") ;

    if (userData) {
      const accoutData = await accountModel.findOne({
      //@ts-ignore
        userId : req.id
      })
      return res.status(200).json({
        accoutData ,
        myData: userData,
      });
    }

    return res.status(404).json({ message: "user not found" });
  } catch (error) {
    console.log("userInfo function error",error);
    return res.status(500).json({message:"internal server error"});
  }
}
