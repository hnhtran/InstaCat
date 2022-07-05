import NewPost from "../NewPost/NewPost"
import Post from "../Post/Post"
export default function Feed() {
	return (
		<>
			<div className='feed'>
				<div className='feedcontainer'>
					<NewPost />
					<Post />
				</div>
			</div>
		</>
	)
}
