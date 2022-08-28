const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("FirstSQL", "userName", "passWord", {
  host: "localhost",
  dialect: "mysql",
  pool: { max: 5, min: 0, idel: 10000 },
  logging: false /* use to not print additional information in terminal */,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(`${err} error show`);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, DataTypes);
db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync");
});
/* using force to control table to be not create from the start or to create table from starting always. false means dont start true means start*/
module.exports = db;
