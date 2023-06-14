import React from "react";
import { useState, useEffect, useContext, useCallback } from "react";
import AuthContext from "../store/authContext";
import axios from "axios";
import ShowComments from "./ShowComments";
import './css/Posts.css'
import './css/Profile.css'

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
    const dateString = post.updatedAt
    const date = new Date(dateString)
    const formattedDate = date.toLocaleString()
    return (
      <div key={post.id} className="postCard">
        <button onClick={() => deletePost(post.id)}>Delete</button>
        <h2>{post.postTitle}</h2>
        <h3>{formattedDate}</h3>
        <p>{post.postText}</p>
        <ShowComments postId={post.id} />
      </div>
    );
  });

  const mappedComments = userComments.map((commentItem) => {
    const dateString = commentItem.updatedAt
    const date = new Date(dateString)
    const formattedDate = date.toLocaleString()

    return (
      <div key={commentItem.id} className="commentCard">
        <button onClick={() => deleteComment(commentItem.id)}>Delete</button>
        <div>
        <h5>{commentItem.user.username}</h5>
        <h6>{formattedDate}</h6>
        </div>
        <p>{commentItem.commentText}</p>
      </div>
    );
  });

  if (showPosts) {
    return (
      <main className="profile">
        <div className="postsOrComments">
        <h2 onClick={() => setShowPosts(true)} className="activeView">
          Your Posts
        </h2>
        <h2 onClick={() => setShowPosts(false)} className="inactiveView">
          Your Comments
        </h2>
        </div>
        {mappedPosts.length >= 1 ? (
        <div className="profPosts">
          {mappedPosts}
          </div>
        ) : (
          <h3>You haven't made a post yet!</h3>
        )}
      </main>
    );
  } else {
    return (
      <main className="profile">
        <div className="postsOrComments">
        <h2 onClick={() => setShowPosts(true)} className="inactiveView">
          Your Posts
        </h2>
        <h2 onClick={() => setShowPosts(false)} className="activeView">
          Your Comments
        </h2>
        </div>
        {mappedComments.length >= 1 ? (
          <div className="profComments">{mappedComments}</div>
        ) : (
          <h3>You haven't posted any comments yet!</h3>
        )}
      </main>
    );
  }
};

export default Profile;
