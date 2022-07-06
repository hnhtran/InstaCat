import NewPost from "../NewPost/NewPost"
import Posts from "../Posts/Posts"
export default function Feed() {
	return (
		<>
			<div className='feed'>
				<div className='feedcontainer'>
					<NewPost />
					<Posts />
				</div>
			</div>
		</>
	)
}
