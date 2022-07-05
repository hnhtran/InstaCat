import { AddPhotoAlternateIcon } from "@mui/icons-material/AddPhotoAlternate"
import "./NewPost.css"
export default function NewPost() {
	return (
		<>
			<div className='newPosts'>
				<div className='newPostsContainer'>
					<div className='newPostsTop'>
						<img className='postsProfileimg' src='' alt='' />
						<input placeholder='Show us your cats!' className='newPostInput' />
					</div>
					<hr className='newPostHr' />
					<div className='newPostsBottom'>
						<div className='newPostsOptions'>
							<div className='option'>
								<AddPhotoAlternateIcon />
								<span className='newPostsText'>Photo</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
