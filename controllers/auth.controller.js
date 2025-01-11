import { User } from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!email || !password || !fullName) {
      throw new Error("All fields are required");
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const user = new User({
      email: email,
      password: hashPassword,
      fullName: fullName,
      verificationToken,
      verficationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // expires in 24hours
    });
    await user.save();
    //authenticate jwt
    generateTokenAndSetCookie(res, user._id);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  res.send("Signup route");
};
export const logout = async (req, res) => {
  res.send("Signup route");
};
