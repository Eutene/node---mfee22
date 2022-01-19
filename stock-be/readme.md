# 01 / 16 作業

## 正式建立 stock-be

1. 建立資料夾 stock-be
2. npm init -f
3. package.js - "dev": "nodemon server.js"
4. [Express](https://expressjs.com/zh-tw/)
   `npm install express`
   `npm i dotenv`
5. 建立 .env .env.example
6. 建立 server.js

```javascript=
// 引入 express
const express = require("express");
require("dotenv").config();
// 利用express 這個library 來建立一個web app
let app = express();
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
```

7. 修改 package.json 的 scripts 區塊
   `"dev": "nodemon server.js"`
8. npm run dev

## 查詢佔用 PORT

`$ lsof -n -i | grep LISTEN` 列出所有佔用 PORT 的指令
`kill -n -i:PORT` 關掉佔用的 PORT

終端如果沒有關閉就關掉，會在背景繼續跑
POST 不能重複佔用，所以必須把 pid 砍掉
