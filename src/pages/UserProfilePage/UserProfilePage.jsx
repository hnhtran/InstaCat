import React from "react";
import NewPost from "../../components/NewPost/NewPost";

const UserProfilePage = ({user, post, setPost}) => {
  return (
    <div>
      <h1>UserProfilePage</h1>
      <NewPost user={user} post={post} setPost={setPost}/>
    </div>
  );
};

export default UserProfilePage;
