import {DataTypes} from "sequelize";
import {sequelize} from "../config/db.js";
import bcrypt from "bcrypt";

export const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: DataTypes.STRING,
    role: {
        type: DataTypes.ENUM("user", "admin"),
        defaultValue: "user",
    },
});

User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
});