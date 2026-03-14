import {User} from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
};

export const login = async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({ where: {email}});
    if (!user) return res.status(404).json({message: "USer not found"});

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({message: "invalid password"});

    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });

    res.json({token});
};