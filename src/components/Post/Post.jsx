import "./Post.css"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import FavoriteIcon from "@mui/icons-material/Favorite"
export default function Post({ user }) {
	return (
		<>
			<div className='post'>
				<div className='postWrapper'>
					<div className='postTop'>
						<div className='postTopLeft'>
							<span className='postUsername'>{user.name}</span>
							<span className='postDate'>Less than an hour ago</span>
						</div>
						<div className='postTopRight'>
							<MoreVertIcon />
						</div>
					</div>

					<div className='postCenter'>
						<span className='postText'>Testing!</span>
					</div>
					<div className='postBottom'>
						<div className='postBottomLeft'>
							<FavoriteIcon />
                            <span className='postFavorites'>9 likes</span>
						</div>
						<div className='postBottomRight'>
                            <span className="postComment">2 comments</span>
                        </div>
					</div>
				</div>
			</div>
		</>
	)
}
