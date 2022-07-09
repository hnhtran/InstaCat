import "./Post.css"
import { updatePost, deletePost } from "../../utilities/posts-api"
import { MoreVert, PostAddOutlined } from "@mui/icons-material/"
import { Favorite } from "@mui/icons-material/"
import moment from "moment"
import { useState } from "react"
import UpdatePostForm from "../UpdatePostForm/UpdatePostForm"

export default function Post({ user, post, setPosts, posts }) {
	const allowUpdate = post.userId === user._id;
	// console.log("allowUpdate: ", allowUpdate)
	const [isUpdate, setIsUpdate] = useState(false)
	const [postData, setPostData] = useState({
		_id: post._id,
		userId: post.userId,
		description: post.description,
		image: post.image,
	})

	const handleDelete = async () => {
		await deletePost(post)
		setPosts(posts.filter((item) => item._id !== post._id))
	}

	const handleUpdate = async () => {
		// console.log(postData)
		await updatePost(postData)
	}

	const [like, setLike] = useState(0)
	const [isLiked, setIsLiked] = useState(false)
	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1)
		setIsLiked(!isLiked)
	}

	// const handleLike = () => {
	// 	// console.log(`${userId}, ${postIdObj}`)
	// 	userProfileAPI.likePost(userId, postIdObj)
	// 	setPosts(posts.map(item => {
	// 		if (item._id === post._id) {
	// 			item.likes++
	// 		}
	// 		return item
	// 	}))
	// }

	return (
		<>
			<div className='post'>
				<div className='postWrapper'>
					<div className='postTop'>
						<div className='postTopLeft'>
							<span className='postUsername'>{post.userName}</span>
							<span className='postDate'>
								Created: {new Date(post.createdAt).toLocaleDateString()}{" "}
							</span>
							<span className='postDate'>
								Updated: {moment(post.updatedAt).fromNow()}
							</span>
							{allowUpdate &&
								<div className="updateDeleteButtons">
									<button className="deleteButton" onClick={handleDelete}>Delete</button>
									<button className="updateButton" onClick={() => setIsUpdate(true)}>Update</button>

								</div>
							}
							{isUpdate && (
								<UpdatePostForm
									user={user}
									post={post}
									handleUpdate={handleUpdate}
									postData={postData}
									setPostData={setPostData}
								/>
							)}
						</div>
						<div className='postTopRight'>
							<MoreVert />
						</div>
					</div>

					<div className='postCenter'>
						<span className='postText'>
							{post.description} <hr />
							<br />
						</span>
						<img alt='rascal' src={post.image} />
					</div>
					<div className='postBottom'>
						<div className='postBottomLeft'>
							<Favorite onClick={likeHandler} />
							<span className='postFavorites'>{like} people liked this</span>
						</div>
						<div className='postBottomRight'>
							<span className='postComment'>{post.comment}comments</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
