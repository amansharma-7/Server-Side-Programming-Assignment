const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
app.use(cookieParser());

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
const connectDatabase = require("./config/database");
connectDatabase();

const user = require("./routes/user");
app.use("/api/v1", user);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
