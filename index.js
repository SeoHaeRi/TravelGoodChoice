const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: './controller/.env' })

const port = process.env.PORT;

app.set("view engine", "ejs");
app.use("/static", express.static("static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routes");
const userRouter = require("./routes/user");
app.use('/', router);
app.use('/user', userRouter);

app.get('*', (req, res) => {
  res.send("접근할 수 없는 주소입니다.");
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});

