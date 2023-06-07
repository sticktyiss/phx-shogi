import React from "react";
import { useState, useEffect, useContext, useCallback } from "react";
import AuthContext from "../store/authContext";
import axios from "axios";
import ShowComments from "./ShowComments";

// TODO: Put a comment section so you can view and delete comments you've made.

const Profile = () => {
  const { userId, token } = useContext(AuthContext);
  const [userPosts, setUserPosts] = useState([]);
  const [userComments, setUserComments] = useState([]);

  const [showPosts, setShowPosts] = useState(true);

  // AXIOS requests for posts
  const getUserPosts = useCallback(() => {
    axios
      .get(`/api/userposts/${userId}`)
      .then((res) => setUserPosts(res.data))
      .catch((theseHands) => console.log("getUserPosts Error:", theseHands));
  }, []);

  useEffect(() => {
    getUserPosts();
  }, [getUserPosts]);

  // const updatePost = (id) => { //TODO: I may not do an editing function
  //   axios
  //     .put(`/api/posts/${id}`, {
  //       headers: {
  //         authorization: token,
  //       },
  //     })
  //     .then(() => {
  //       getUserPosts();
  //     })
  //     .catch((theseHands) => console.log("ERR in editing", theseHands));
  // };

  const deletePost = (id) => {
    axios
      .delete(`/api/posts/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then(() => {
        getUserPosts();
      })
      .catch((theseHands) => console.log("ERR in deleting", theseHands));
  };

  // AXIOS requests for comments
  const getUserComments = useCallback(() => {
    axios
      .get(`/api/userComments/${userId}`)
      .then((res) => setUserComments(res.data))
      .catch((theseHands) => console.log("getUserComments Error:", theseHands));
  }, []);

  useEffect(() => {
    getUserComments();
  }, [getUserComments]);

  const deleteComment = (id) => {
    axios
      .delete(`/api/comments/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then(() => {
        getUserComments();
      })
      .catch((theseHands) => console.log("ERR in deleteComment:", theseHands));
  };

  const mappedPosts = userPosts.map((post) => {
    return (
      <div key={post.id} className="postCard">
        <button onClick={() => deletePost(post.id)}>X</button>
        <h2>{post.postTitle}</h2>
        <h3>{post.username}</h3>
        <p>{post.postText}</p>
        <ShowComments postId={post.id} />
      </div>
    );
  });

  const mappedComments = userComments.map((commentItem) => {
    return (
      <div key={commentItem.id} className="commentCard">
        <button onClick={() => deleteComment(commentItem.id)}>X</button>
        <h5>{commentItem.user.username}</h5>
        <h6>
          {commentItem.createdAt /* FIXME: convert to pretty date w/ time */}
        </h6>
        <p>{commentItem.commentText}</p>
      </div>
    );
  });

  if (showPosts) {
    return (
      <main className="Profile">
        <h2 onClick={() => setShowPosts(true)} className="bigNCenter">
          Your Posts
        </h2>
        <h2 onClick={() => setShowPosts(false)} className="">
          Your Comments
        </h2>
        {mappedPosts.length >= 1 ? (
          mappedPosts
        ) : (
          <h3>You haven't made a post yet!</h3>
        )}
      </main>
    );
  } else {
    return (
      <main className="Profile">
        <h2 onClick={() => setShowPosts(true)} className="">
          Your Posts
        </h2>
        <h2 onClick={() => setShowPosts(false)} className="bigNCenter">
          Your Comments
        </h2>
        {mappedComments.length >= 1 ? (
          mappedComments
        ) : (
          <h3>You haven't posted any comments yet!</h3>
        )}
      </main>
    );
  }
};

export default Profile;
