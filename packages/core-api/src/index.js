import express from "express"
import {User} from "@db/model/User";

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  User.then(userModel => new userModel({id: "1"}).save())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})