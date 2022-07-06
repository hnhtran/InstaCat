import { AddAPhoto } from "@mui/icons-material/"
import "./NewPost.css"
import FileBase64 from "react-file-base64"
import { useState } from "react"

export default function NewPost() {
	const [first, setFirst] = useState("")
	return (
		<>
			<div className='newPosts'>
				<div className='newPostsContainer'>
					<div className='newPostsTop'>
						<img className='postsProfileimg' src={first} alt='Add Photo' />
						<input placeholder='Show us your cats!' className='newPostInput' />
					</div>
					<hr className='newPostHr' />
					<div className='newPostsBottom'>
						<div className='newPostsOptions'>
							<div className='option'>
								<a href=''></a>
								<AddAPhoto className='icon' />
								<span className='newPostsText'>Photo</span>
								<FileBase64
									type='file'
									multiple={false}
									onDone={({ base64 }) => setFirst(base64)}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				{/* {first} */}
				<img
					className='postsProfileimg'
					src={first}
					alt='Add Photo'
					height='50px'
				/>
			</div>
		</>
	)
}
