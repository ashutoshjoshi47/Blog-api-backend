import app from "./src/app.js";
import {sequelize} from "./src/config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    });
});