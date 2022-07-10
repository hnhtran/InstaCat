import "./Post.css";
import { updatePost, deletePost, likePost } from "../../utilities/posts-api";
import { MoreVert, Favorite } from "@mui/icons-material/";
import moment from "moment";
import { useState } from "react";
import UpdatePostForm from "../UpdatePostForm/UpdatePostForm";
import { Avatar } from "@mui/material";

export default function Post({ user, post, setPost, setPosts, posts }) {
  const allowUpdate = post.user._id === user._id;
  // console.log("allowUpdate: ", allowUpdate)
  const [isUpdate, setIsUpdate] = useState(false);
  const [postData, setPostData] = useState({
    _id: post._id,
    user: post.user._id,
    description: post.description,
    image: post.image,
  });

  const handleUpdateBtn = (e) => {
	isUpdate ? setIsUpdate(false) : setIsUpdate(true);
  }

  const handleDelete = async (event) => {
    event.preventDefault();
    const postObj = {
      _id: post._id,
      user: post.user._id,
    };
    await deletePost(postObj);
    setPosts(posts.filter((item) => item._id !== post._id));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const updatedPost = await updatePost(postData);
    setPost(updatedPost);
	setIsUpdate(false);
  };

  // const [like, setLike] = useState(0);
  // const [isLiked, setIsLiked] = useState(false);
  // const likeHandler = () => {
  //   setLike(isLiked ? like - 1 : like + 1);
  //   setIsLiked(!isLiked);
  // };

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = async (event) => {
    // console.log("likeHandler: ", like, isLiked);
    event.preventDefault();
      const postObj = {
      _id: post._id,
      user: user._id,
    };
    // console.log(postObj)
    await likePost(postObj);
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  // const [liked, setLiked] = useState(post.likes.includes(user._id))
  // const [likes, setLikes] = useState(post.likes.length);
  // console.log(post.likes.includes(user._id))
  // const handleLike = async (event) => {
  //   event.preventDefault();
  //   const postObj = {
  //     _id: post._id,
  //     user: user._id,
  //   };
  //   console.log(postObj)
  //   // const updatedPost = await likePost(postObj);
  //   // setPost(updatedPost);
  //   setLiked((prev) => !prev);
  //   liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  // }

  

  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <div>
                <Avatar alt="User profile image" src={post.user.avatar} />
                <div className="postUsername">{post.user.name}</div>
              </div>
              <span className="postDate">
                Created: {new Date(post.createdAt).toLocaleDateString()}{" "}
              </span>
              <span className="postDate">
                Updated: {moment(post.updatedAt).fromNow()}
              </span>
              {allowUpdate && (
                <div className="updateDeleteButtons">
                  <button className="deleteButton" onClick={handleDelete}>
                    Delete
                  </button>
                  <button
                    className="updateButton"
                    onClick={handleUpdateBtn}
                  >
                    Update
                  </button>
                  {/* {console.log("isUpdate: ", isUpdate)} */}
                </div>
              )}
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          {isUpdate ? (
			<div>
				<UpdatePostForm
              user={user}
              post={post}
              handleUpdate={handleUpdate}
              postData={postData}
              setPostData={setPostData}
            />
			</div>
            
          ) : (
            <div className="postCenter">
              <span className="postText">
                {post.description} <hr />
                <br />
              </span>
              {post.image && <img alt="rascal" src={post.image} />}
            </div>
          )}
          {/* <div className='postCenter'>
						<span className='postText'>
							{post.description} <hr />
							<br />
						</span>
						<img alt='rascal' src={post.image} />
					</div> */}
          <div className="postBottom">
            <div className="postBottomLeft">
              <Favorite onClick={likeHandler} />
              <span className="postFavorites">{like} people liked this</span>
            </div>
            {/* <div className="postBottomLeft">
              <Favorite onClick={handleLike} />
              <span className="postFavorites">{post.likes.length} people liked this</span>
            </div> */}
            <div className="postBottomRight">
              <span className="postComment">{post.comment}comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
