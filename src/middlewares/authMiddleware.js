import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {User} from "../models/index.js";

dotenv.config();

export const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) return res.stats(401).json({message: "No token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);

    req.user = user;
    next();
};