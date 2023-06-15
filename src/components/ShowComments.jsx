import React from "react";
import axios from "axios";
import AddComment from "./AddComment";
import { useState, useEffect } from "react";
import { BiChevronDownCircle, BiChevronUpCircle } from "react-icons/bi";
import "./css/Posts.css";

const ShowComments = ({ postId }) => {
  const [showComments, setShowComments] = useState(false);
  const [postComments, setPostComments] = useState([]);

  const [addedComment, setAddedComment] = useState("");

  const handleShowCommentChange = (e) => {
    const visibility = !showComments;
    setShowComments(visibility);
    if(showComments===true){
      requestComments()
    }
  };

  const handleFormSubmit = (addedState) => {
    requestComments();
    setAddedComment(addedState);
  };

  useEffect(() => {
    axios
      .get(`/api/comments/${postId}`)
      .then((res) => {
        setPostComments(res.data);
      })
      .catch((theseHands) => console.log(theseHands));
    }, []);

  const requestComments = () => axios
      .get(`/api/comments/${postId}`)
      .then((res) => {
        setPostComments(res.data);
      })
      .catch((theseHands) => console.log(theseHands));
    
  const mappedComments = postComments.map((commentItem) => {
    const dateString = commentItem.updatedAt;
    const date = new Date(dateString);
    const formattedDate = date.toLocaleString();

    return (
      <div key={commentItem.id} className="commentCard">
        <div>
          <h5>{commentItem.user.username}</h5>
          <h6>{formattedDate}</h6>
        </div>
        <p>{commentItem.commentText}</p>
      </div>
    );
  });

  if (!showComments) {
    return (
      <div className="commentArea">
        <div className="showComment" onClick={handleShowCommentChange}>
          <BiChevronDownCircle className="commentArrow" />
          <p>Show comments</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="commentArea">
        <div className="showComment" onClick={handleShowCommentChange}>
          <BiChevronUpCircle className="commentArrow" />
          <p>Hide comments</p>
        </div>
        <AddComment postId={postId} onSubmit={handleFormSubmit} addedCommentState={addedComment} />
        {addedComment ? mappedComments : mappedComments}
      </div>
    );
  }
};

export default ShowComments;
