const express = require("express");
const app = express();
require("./db_connect");
const userRouter = require("./routes/user");
const userAuthRouter = require("./routes/auth");

app.use(express.json());
app.use("/api/", userRouter);

app.use("/api/", userAuthRouter);

// app.get("/api/test", (req, res) => {
//     res.send("Hello World!");
// });

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port`);
});