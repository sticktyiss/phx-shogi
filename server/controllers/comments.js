const { Users } = require("../models/users");
const { Posts } = require("../models/posts");
const { Comments } = require("../models/comments");

module.exports = {
  getComments: async (req, res) => {
    try {
      console.log("getComments hit");
      const { postId } = req.params;
      const comments = await Comments.findAll({
        where: { postId: postId },
        include: [
          {
            model: Users,
            required: true,
            attributes: [`username`],
          }, // FIXME: May need to add more parts here
        ],
      });
      // console.log(comments)
      res.status(200).send(comments.reverse());
    } catch (theseHands) {
      console.log("error in getting comments", theseHands);
      res.sendStatus(400);
    }
  },
  getUserComments: async (req, res) => {
    try {
      console.log("getUserComments hit");
      const { userId } = req.params;
      const comments = await Comments.findAll({
        where: { userId: userId },
        include: [
          {
            model: Users,
            required: true,
            attributes: [`username`],
          },
        ],
      });
      res.status(200).send(comments.reverse());
    } catch (theseHands) {
      console.log("ERR in getUserComments", theseHands);
      res.sendStatus(400);
    }
  },
  addComment: async (req, res) => {
    try {
      console.log("addComment hit");
      const { content, userId, postId } = req.body;
      await Comments.create({ commentText: content, userId, postId });
      res.sendStatus(200);
    } catch (theseHands) {
      console.log("error in adding comment", theseHands);
      res.sendStatus(400);
    }
  },
  deleteComment: async (req, res) => {
    try {
      console.log("deleteComment hit");
      const { id } = req.params;
      await Comments.destroy({ where: { id: +id } });
      res.sendStatus(200);
    } catch (theseHands) {
      console.log("error in deleting comment", theseHands);
      res.sendStatus(400);
    }
  },
};
