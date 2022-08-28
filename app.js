const { urlencoded } = require("express");
const express = require("express");
const app = express();
const port = 8080;
require("./models");
const userCtrl = require("./controllers/user.controller");

app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Home page");
});

app.post("/add", userCtrl.addUser);
app.get("/getAlluser", userCtrl.getAlluser);
app.patch("/updateUser", userCtrl.updateUser);
app.delete("/userDelete", userCtrl.deleteUser);
app.delete("/deleteAll", userCtrl.deleteallData);

app.listen(port, () => {
  console.log(`server is running on port no ${port}`);
});
