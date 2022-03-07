import {Sequelize, DataTypes} from "sequelize"
import path from "path"

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: path.resolve(__dirname, "db.sqlite")
});

export const User = sequelize.define("User", {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    pass: {
        type: DataTypes.STRING
    }
}).sync()