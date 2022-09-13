import express from "express";
import bodyParser from "body-parser";
import cors from "cors"

import userRoutes from "./route/users.js"

const app = express();
const port = 5001;

app.use(bodyParser.json());
app.use(cors());

app.use("/",userRoutes)
app.get("/",(req,res) => res.send("hello from express"))
app.all("*",(req,res) => res.send("the route not exist"))

app.listen(port,() =>
	console.log(`Server is listengnin on port: http://localhost:${port}`)
	);
  