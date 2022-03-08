import express from "express"
import cookieParser from "cookie-parser"
import UserRouter from "./routes/User";

const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.use("/user", UserRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})