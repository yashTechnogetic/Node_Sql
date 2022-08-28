module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      // tableName:"userUpdate"
      timestamps: false /* use to remove createdAt and updatedAt columns from table of schema */,
      //   createdAt: false, /* use to remove createdAt columns from table of schema */
      //   createdAt: "created_at" /* use to update createdAt colum name in table of schema */,
      //   updatedAt: false, /* use to remove updatedAt columns from table of schema */
      //   updatedAt: "modifide_at" /* use to update updatedAt colum name in table of schema */,
    }
  );
  return User;
};
