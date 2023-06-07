import React from "react";
import axios from "axios";
import AddComment from "./AddComment";
import { useState, useEffect } from "react";
import { BiChevronDownCircle, BiChevronUpCircle } from "react-icons/bi";

const ShowComments = ({ postId }) => {
  const [showComments, setShowComments] = useState(false);
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/comments/${postId}`)
      .then((res) => {
        console.log(res.data);
        setPostComments(res.data);
      })
      .catch((theseHands) => console.log(theseHands));
  }, []);

  const mappedComments = postComments.map((commentItem) => {
    return (
      <div key={commentItem.id} className="commentCard">
        <h5>{commentItem.user.username}</h5>
        <h6>
          {commentItem.createdAt /* FIXME: convert to pretty date w/ time */}
        </h6>
        <p>{commentItem.commentText}</p>
      </div>
    );
  });

  if (!showComments) {
    return (
      <div className="commentArea">
        <div
          className="showComment"
          onClick={() => setShowComments(!showComments)}
        >
          <BiChevronDownCircle className="commentArrow" />
          <p>Show comments</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="commentArea">
        <div className="showComment">
          <BiChevronUpCircle
            className="commentArrow"
            onClick={() => setShowComments(!showComments)}
          />
          <p>Hide comments</p>
        </div>
        <AddComment postId={postId} />
        {mappedComments}
      </div>
    );
  }
};

export default ShowComments;
