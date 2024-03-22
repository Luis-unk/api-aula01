const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./router/userRouter.js");
const productRouter = require("./router/productRouter.js");

const port = 3000;

const app = express();
app.use(bodyParser.json("application/json"));

app.get("/", (req, res) => {
  res.send("<h1>Hello user!</h1>");
});

app.use("/api", userRouter);

app.use("/api", productRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
