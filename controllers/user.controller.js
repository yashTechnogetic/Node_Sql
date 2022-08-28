var db = require("../models");

const Usermodel = db.user;

const addUser = async (req, res) => {
  const emailexist = await Usermodel.findOne({
    where: { email: req.body.email },
  });

  if (!emailexist) {
    const userDetails = await Usermodel.create({
      name: req.body.name,
      email: req.body.email,
    });
    userDetails.save();

    res.status(201).json({ msg: "Added Sucessfully" });
  } else {
    res.status(409).json({ msg: "Already Exist" });
  }
};

const getuserDetail = async (req, res) => {
  const userdetails = await Usermodel.findOne({
    where: { email: req.params.email },
  });
  if (userdetails) {
    res.status(200).send({ details: userdetails });
  } else {
    res.status(403).send({ msg: "No user find with Provided email address" });
  }
};

const getAlluser = async (req, res) => {
  const allUser = await Usermodel.findAll();
  res.status(200).send({ details: allUser });
};

const updateUser = async (req, res) => {
  const findId = await Usermodel.findOne({
    where: { id: req.body.id },
  });
  if (findId) {
    const id = findId.dataValues.id;
    const user = await Usermodel.update(
      { name: req.body.name, email: req.body.email },
      { where: { id: id } }
    );
    res.status(200).send({ msg: "Update Sucessful" });
  } else {
    res.status(403).send({ msg: "id not found" });
  }
};

const deleteUser = async (req, res) => {
  const userExist = await Usermodel.findOne({
    where: { email: req.body.email },
  });
  if (userExist) {
    userExist.destroy();
    res.status(201).send({ msg: "deleted sucessfully" });
  } else {
    res.status(403).send({ msg: "user not found" });
  }
};

const deleteallData = async (req, res) => {
  await Usermodel.destroy({ truncate: true });
  res.status(200).send({ msg: "All data deleted" });
};

module.exports = {
  addUser,
  getuserDetail,
  getAlluser,
  updateUser,
  deleteUser,
  deleteallData,
};
