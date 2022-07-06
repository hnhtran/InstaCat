import "./Post.css"
import { MoreVert } from "@mui/icons-material/"

import { Favorite } from "@mui/icons-material/"
export default function Post({user, post, setPost}) {
	console.log(post)
	return (
		<>
			<div className='post'>
				<div className='postWrapper'>
					<div className='postTop'>
						<div className='postTopLeft'>
							<span className='postUsername'>{}</span>
							<span className='postDate'>5 minutes ago</span>
						</div>
						<div className='postTopRight'>
							<MoreVert />
						</div>
					</div>

					<div className='postCenter'>

						<span className='postText'>Look at this cutie! <hr /><br /></span>
						
						
						<img alt='rascal' src={require("./rascal-1.jpg")} />

						<span className='postText'>{post.description}</span>
						<br />
						<img alt='rascal' src={post.image} />

					</div>
					<div className='postBottom'>
						<div className='postBottomLeft'>
							<Favorite />
							<span className='postFavorites'>9 likes</span>
						</div>
						<div className='postBottomRight'>
							<span className='postComment'>2 comments</span>
						</div>
					</div>
				</div>
			</div>
			<div className='post'>
				<div className='postWrapper'>
					<div className='postTop'>
						<div className='postTopLeft'>
							<span className='postUsername'>{}</span>
							<span className='postDate'>Less than an hour ago</span>
						</div>
						<div className='postTopRight'>
							<MoreVert />
						</div>
					</div>

					<div className='postCenter'>
						<span className='postText'>Testing!</span>
						<img src='' alt='' />
					</div>
					<div className='postBottom'>
						<div className='postBottomLeft'>
							<Favorite />
							<span className='postFavorites'>9 likes</span>
						</div>
						<div className='postBottomRight'>
							<span className='postComment'>2 comments</span>
						</div>
					</div>
				</div>
			</div>
			<div className='post'>
				<div className='postWrapper'>
					<div className='postTop'>
						<div className='postTopLeft'>
							<span className='postUsername'>{}</span>
							<span className='postDate'>Less than an hour ago</span>
						</div>
						<div className='postTopRight'>
							<MoreVert />
						</div>
					</div>

					<div className='postCenter'>
						<span className='postText'>Testing!</span>
						<img src='' alt='' />
					</div>
					<div className='postBottom'>
						<div className='postBottomLeft'>
							<Favorite />
							<span className='postFavorites'>9 likes</span>
						</div>
						<div className='postBottomRight'>
							<span className='postComment'>2 comments</span>
						</div>
					</div>
				</div>
			</div>
			<div className='post'>
				<div className='postWrapper'>
					<div className='postTop'>
						<div className='postTopLeft'>
							<span className='postUsername'>{}</span>
							<span className='postDate'>Less than an hour ago</span>
						</div>
						<div className='postTopRight'>
							<MoreVert />
						</div>
					</div>

					<div className='postCenter'>
						<span className='postText'>Testing!</span>
						<img src='' alt='' />
					</div>
					<div className='postBottom'>
						<div className='postBottomLeft'>
							<Favorite />
							<span className='postFavorites'>9 likes</span>
						</div>
						<div className='postBottomRight'>
							<span className='postComment'>2 comments</span>
						</div>
					</div>
				</div>
			</div>
			<div className='post'>
				<div className='postWrapper'>
					<div className='postTop'>
						<div className='postTopLeft'>
							<span className='postUsername'>{}</span>
							<span className='postDate'>Less than an hour ago</span>
						</div>
						<div className='postTopRight'>
							<MoreVert />
						</div>
					</div>

					<div className='postCenter'>
						<span className='postText'>Testing!</span>
						<img src='' alt='' />
					</div>
					<div className='postBottom'>
						<div className='postBottomLeft'>
							<Favorite />
							<span className='postFavorites'>9 likes</span>
						</div>
						<div className='postBottomRight'>
							<span className='postComment'>2 comments</span>
						</div>
					</div>
				</div>
			</div>
			<div className='post'>
				<div className='postWrapper'>
					<div className='postTop'>
						<div className='postTopLeft'>
							<span className='postUsername'>{}</span>
							<span className='postDate'>Less than an hour ago</span>
						</div>
						<div className='postTopRight'>
							<MoreVert />
						</div>
					</div>

					<div className='postCenter'>
						<span className='postText'>Testing!</span>
						<img src='' alt='' />
					</div>
					<div className='postBottom'>
						<div className='postBottomLeft'>
							<Favorite />
							<span className='postFavorites'>9 likes</span>
						</div>
						<div className='postBottomRight'>
							<span className='postComment'>2 comments</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
