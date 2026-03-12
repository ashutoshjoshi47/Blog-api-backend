import {sequelize} from "../config/db.js";
import {DataTypes} from "sequelize";

export const Post = sequelize.define("Post", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    title: DataTypes.STRING,
    content: DataTypes.TEXT,
});