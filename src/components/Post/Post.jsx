import "./Post.css"
import * as userProfileAPI from "../../utilities/userProfile-api"
import { MoreVert } from "@mui/icons-material/"
import { Favorite } from "@mui/icons-material/"
import moment from "moment"
import { useState, useEffect } from "react"
import { useParams, Navigate } from "react-router-dom"

export default function Post({ user, post, setPosts, posts }) {
	let { userId } = useParams()
	const postIdObj = { postId: post._id}

	// useEffect(() => {
		
	// }, [handleDelete])

	const handleDelete = () => {
		console.log(`${userId}, ${postIdObj}`)
		userProfileAPI.deletePost(userId, postIdObj)
		setPosts(posts.filter(item => item._id !== post._id))
	}

	const [like, setLike] = useState(0)
	const [isLiked, setIsLiked] = useState(false)
	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1)
		setIsLiked(!isLiked)
	}

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
							<button onClick={handleDelete}>delete</button>
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
