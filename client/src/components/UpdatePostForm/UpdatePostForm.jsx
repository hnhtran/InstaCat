import FileBase64 from "react-file-base64"
import { useParams } from "react-router-dom"
import { useState } from "react"

const UpdatePostForm = ({
	user,
	post,
	handleUpdate,
	postData,
	setPostData,
}) => {
	let { userId } = useParams()
	const postIdObj = { postId: post._id }

	// console.log(`${userId}, ${postIdObj.postId}`)

	// const [postData, setPostData] = useState({
	//   userId: user._id,
	//   userName: user.name,
	//   likes: 0,
	//     description: "",
	//     image: "",
	//   })

	// let description = post.description
	// let temp
	const handleChange = (event) => {
		// event.target.value === ''? temp = description : temp = event.target.value
		// console.log(event.target.value)
		// console.log(temp)
		setPostData({
			...postData,
			[event.target.name]: event.target.value,
		})
	}
	return (
		<>
			<div onSubmit={handleUpdate}>
				<form autoComplete='off'>
					<div className='newPostsContainer'>
						<div className='newPostsTop'>
							<input
								placeholder={post.description}
								// className='newPostInput'
								type='text'
								name='description'
								value={postData.description}
								onChange={handleChange}
							/>
						</div>
						{/* <hr className='newPostHr' /> */}
						<p className='newPostsText'>Choose different image?</p>
						<div>
							<div className='newPostsOptions'>
								<div className='option'>
									{/* <AddAPhoto /> */}
									<FileBase64
										type='file'
										multiple={false}
										name='image'
										onDone={({ base64 }) =>
											setPostData({ ...postData, image: base64 })
										}
									/>
								</div>
							</div>
							<img src={post.image} alt='' />
							<button type='submit'>Edit this post?</button>
						</div>
					</div>
				</form>
			</div>
			<div></div>
		</>
	)
}

export default UpdatePostForm
