import React from "react";
import NewPost from "../../components/NewPost/NewPost";

const CreatePostPage = ({user, post, setPost}) => {
  return (
    <div className="user-setting">
      <h1>Create New Post</h1>
      <NewPost user={user} post={post} setPost={setPost}/>
      <div className="dummy" />
    </div>
  );
};

export default CreatePostPage;