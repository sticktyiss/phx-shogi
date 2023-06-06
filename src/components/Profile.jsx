import React from "react";
import { useState, useEffect, useContext, useCallback } from "react";
import AuthContext from "../store/authContext";
import axios from "axios";
import ShowComments from "./ShowComments";

const Profile = () => {
  const { userId, token } = useContext(AuthContext);
  const [userPosts, setUserPosts] = useState([]);

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

  const mappedPosts = userPosts.map((post) => {
    return (
      <div key={post.id} className="postCard">
        <button onClick={() => deletePost(post.id)}></button>
        <h2>{post.postTitle}</h2>
        <h3>{post.username}</h3>
        <p>{post.postText}</p>
        <ShowComments comments={post.comments} />
      </div>
    );
  });

  return mappedPosts.length >= 1 ? (
    <main className="Profile">
      <h2>Your Posts</h2>
      {mappedPosts}
    </main>
  ) : (
    <main>
      <h2>Your Posts</h2>
      <h3>You haven't posted anything yet!</h3>
    </main>
  );
};

export default Profile;
