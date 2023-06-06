import React from "react";
import axios from "axios";
import AddComment from "./AddComment";
import { useState, useEffect } from "react";
import { BiChevronDownCircle, BiChevronUpCircle } from "react-icons/bi";

const ShowComments = ({ comments }) => {
  const [showComments, setShowComments] = useState(false);
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    axios
      .get("/api/comments")
      .then((res) => {
        console.log(res.data);
        setPostComments(res.data);
      })
      .catch((theseHands) => console.log(theseHands));
  });

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
        <BiChevronDownCircle
          className="commentArrow"
          onClick={() => setShowComments(!showComments)}
        />
        <p>Show comments</p>
      </div>
    );
  } else {
    return (
      <div className="commentArea">
        <BiChevronUpCircle className='commentArrow' onClick={() => setShowComments(!showComments)} />
        <AddComment />
        {mappedComments}
      </div>
    )
  }
};

export default ShowComments;
