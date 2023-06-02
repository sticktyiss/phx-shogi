const { Users } = require("../models/users");
const { Posts } = require("../models/posts");
const { Comments } = require("../controllers/comments");

module.exports = {
  getAllPosts: async (req, res) => {
    try {
      console.log("get all posts");
      const posts = await Posts.findAll({
        include: [
          {
            model: Users,
            required: true,
            attributes: [`username`],
          },
          {
            model: Comments,
            required: true,
          },
        ],
      });
      res.status(200).send(posts);
    } catch (theseHands) {
      console.log("Error in getAllPosts", theseHands);
      res.sendStatus(400);
    }
  },
  getCurrentUserPosts: async (req, res) => {
    try {
      console.log("get current user posts");
      const { userId } = req.params;
      const posts = await Posts.findAll({
        where: { userId: userId },
        include: [
          {
            model: Users,
            required: true,
            attributes: [`username`],
          },
          {
            model: Comments,
            required: true,
          },
        ],
      });
    } catch (theseHands) {
      console.log("error in getCurrentUserPosts", theseHands);
      res.sendStatus(400);
    }
  },
  addPost: async (req, res) => {
    try {
      console.log("add post");
      const { title, content, userId } = req.body;
      await Posts.create({ postTitle: title, postText: content, userId });
    } catch (theseHands) {
      console.log("error in adding post", theseHands);
      res.sendStatus(400);
    }
  },
  editPost: async (req, res) => {
    try {
      console.log("edit post");
      const { id } = req.params;
      await Posts.update({ where: { id: +id } });
    } catch (theseHands) {
      console.log("error in editing post", theseHands);
      res.sendStatus(400);
    }
  },
  deletePost: async (req, res) => {
    try {
      console.log("delete post");
      const { id } = req.params;
      await Posts.destroy({ where: { id: +id } });
      res.sendStatus(200);
    } catch (theseHands) {
      console.log("error in deleting post", theseHands);
      res.sendStatus(400);
    }
  },
};
