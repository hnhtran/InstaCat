import "./Post.css"
import MoreVertIcon from "@mui/icons-material/MoreVert"
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

					<div className='postCenter'></div>
					<div className='postBottom'></div>
				</div>
			</div>
		</>
	)
}
