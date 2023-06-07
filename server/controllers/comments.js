const { Users } = require("../models/users");
const { Posts } = require("../models/posts");
const { Comments } = require("./comments");

module.exports = {
  getComments: async (req, res) => {
    try {
      console.log("get comments");
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
  addComment: async (req, res) => {
    try {
      console.log("add comment hit");
      const { content, userId } = req.body;
      await Comments.create({ commentText: content, userId, postId });
      res.sendStatus(200);
    } catch (theseHands) {
      console.log("error in adding comment", theseHands);
      res.sendStatus(400);
    }
  },
  deleteComment: async (req, res) => {
    try {
      console.log("deleting comment");
    } catch (theseHands) {
      console.log("error in deleting comment", theseHands);
      res.sendStatus(400);
    }
  },
};
