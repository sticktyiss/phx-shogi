require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { SERVER_PORT } = process.env;

const { login, register } = require("./controllers/auth");
const {
  getAllPosts,
  getCurrentUserPosts,
  addPost,
  editPost,
  deletePost,
} = require("./controllers/posts");
// TODO: Add endpoints for commenting
const { isAuthenticated } = require("./middleware/isAuthenticated");
const { sequelize } = require("./util/database");
const { Users } = require("./models/users");
const { Posts } = require("./models/posts");
const { Comments } = require("./models/comments");

const app = express();

app.use(express.json());
app.use(cors());

// DB relationships
Users.hasMany(Posts);
Posts.belongsTo(Users);
Users.hasMany(Comments);
Posts.hasMany(Comments);
Comments.belongsTo(Users);
Comments.belongsTo(Posts);

// Authentication
app.post("/api/register", register);
app.post("/api/login", login);

// Post endpoints
app.get("/api/posts", getAllPosts);
app.get("/api/userposts/:id", getCurrentUserPosts);
app.post("/api/posts", isAuthenticated, addPost);
app.put("/api/posts/:id", isAuthenticated, editPost);
app.delete("/api/posts/:id", isAuthenticated, deletePost);

// sequelize.sync({force: true})
sequelize
  .sync()
  .then(() => {
    app.listen(SERVER_PORT, () =>
      console.log(`DB sync successful & server is up on ${SERVER_PORT}`)
    );
  })
  .catch((theseHands) => console.log("DB sync error", theseHands));
