import React from "react";
import NewPost from "../../components/NewPost/NewPost";
import Feed from '../../components/Feed/Feed';

const UserProfilePage = ({user, post, setPost}) => {
  return (
    <div>
      <h1>UserProfilePage</h1>
      <Feed filterUserId={user._id} user={user} post={post} setPost={setPost} />
      {/* <NewPost user={user} post={post} setPost={setPost}/> */}
    </div>
  );
};

export default UserProfilePage;
