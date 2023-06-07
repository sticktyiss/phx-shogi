require("dotenv").config();
const { SECRET } = process.env;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Users } = require("../models/users");

createToken = (username, id) => {
  return jwt.sign({ username, id }, SECRET, { expiresIn: "2 days" });
};

module.exports = {
  login: async (req, res) => {
    try {
      console.log('trying login')
      const { username, password } = req.body;
      let foundUser = await Users.findOne({ where: { username } });
      if (foundUser) {
        console.log("username exists");
        const isAuthenticated = bcrypt.compareSync(
          password,
          foundUser.hashedPass
          );
          if (isAuthenticated) {
            console.log("password correct");
            const token = createToken(
              foundUser.dataValues.username,
              foundUser.dataValues.id
              );
          const exp = Date.now() + 1000 * 60 * 60 * 3;
          res.status(200).send({
            username: foundUser.dataValues.username,
            userId: foundUser.dataValues.id,
            token,
            exp,
          });
        } else {
          console.log("password is incorrect");
        }
      } else {
        console.log("That username does not exist");
      }
    } catch (theseHands) {
      console.log("Login request failed", theseHands);
      res.sendStatus(400);
    }
  },
  register: async (req, res) => {
    try {
      console.log('trying register')
      const { username, password, email, firstname, lastname, wins, losses, draws } = req.body;
      let foundUser = await Users.findOne({ where: { username } });
      if (foundUser) {
        res.status(400).send("username already exists");
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = await Users.create({
          username,
          hashedPass: hash,
          email,
          firstname,
          lastname,
          wins: +wins,
          losses: +losses,
          draws: +draws,
        });
        console.log(newUser);
        const token = createToken(
          newUser.dataValues.username,
          newUser.dataValues.id
        );
        console.log("TOOOOKEN", token);
        const exp = Date.now() + 1000 * 60 * 60 * 3;
        res.status(200).send({
          username: newUser.dataValues.username,
          userId: newUser.dataValues.id,
          token,
          exp,
        });
      }
    } catch (theseHands) {
      console.log("error in registering", theseHands);
      res.sendStatus(400);
    }
  },
};
