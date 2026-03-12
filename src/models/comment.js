import {sequelize} from "../config/db.js";
import {DataTypes} from "sequelize";

export const Comment = sequelize.define("Comment", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    content: DataTypes.TEXT,
});