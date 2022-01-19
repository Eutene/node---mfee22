// 引入 express
const express = require("express");
require("dotenv").config();
// 利用express 這個library 來建立一個web app
let app = express();
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});