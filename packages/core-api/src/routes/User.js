import express from "express";

const UserRouter = express.Router()

UserRouter.get("/", (req, res) => {
    res.send("Hello World")
})


export default UserRouter