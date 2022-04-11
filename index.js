const express = require('express');
const app = express();
require("./db_connect");
const userRouter = require("./routes/user");
app.use(express.json());
app.use(userRouter);


// app.get("/api/test", (req, res) => { 
//     res.send("Hello World!");
// });


app.listen(process.env.PORT||3000, () => {
    console.log(`Server is running on port`);
})