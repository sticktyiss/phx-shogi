const { Users } = require("../models/users");
const { Posts } = require("../models/posts");
const { Comments } = require("../models/comments");

module.exports = {
  getAllPosts: async (req, res) => {
    try {
      console.log("getAllPosts hit");
      const posts = await Posts.findAll({
        include: [
          {
            model: Users,
            required: true,
            attributes: [`username`],
          },
          // { TODO: add these back in FIXME:
          //   model: Comments,
          //   required: true,
          // },
        ],
      });
      // TODO console.log(posts)
      res.status(200).send(posts.reverse());
    } catch (theseHands) {
      console.log("Error getAllPosts:", theseHands);
      res.sendStatus(400);
    }
  },
  getCurrentUserPosts: async (req, res) => {
    try {
      console.log("getCurrentUserPosts hit");
      const { userId } = req.params;
      const posts = await Posts.findAll({
        where: { userId: userId },
        include: [
          {
            model: Users,
            required: true,
            attributes: [`username`],
          },
          // { TODO: add these back in FIXME:
          //   model: Comments,
          //   required: true,
          // },
        ],
      });
      // console.log(posts)
      res.status(200).send(posts.reverse());
    } catch (theseHands) {
      console.log("error in getCurrentUserPosts:", theseHands);
      res.sendStatus(400);
    }
  },
  addPost: async (req, res) => {
    try {
      console.log("add post hit");
      const { title, content, userId } = req.body;
      await Posts.create({ postTitle: title, postText: content, userId });
      res.sendStatus(200);
    } catch (theseHands) {
      console.log("error in adding post", theseHands);
      res.sendStatus(400);
    }
  },
  editPost: async (req, res) => {
    try {
      console.log("edit post hit");
      const { id } = req.params;
      await Posts.update({ where: { id: +id } });
      res.sendStatus(200);
    } catch (theseHands) {
      console.log("error in editing post", theseHands);
      res.sendStatus(400);
    }
  },
  deletePost: async (req, res) => {
    try {
      console.log("delete post hit");
      const { id } = req.params;
      await Posts.destroy({ where: { id: +id } });
      res.sendStatus(200);
    } catch (theseHands) {
      console.log("error in deleting post", theseHands);
      res.sendStatus(400);
    }
  },
};
