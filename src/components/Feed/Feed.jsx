import NewPost from "../NewPost/NewPost"
import Posts from "../Posts/Posts"
export default function Feed({user}) {
	return (
		<>
			<div className='feed'>
				<div className='feedcontainer'>
					<NewPost user={user}/>
					<Posts />
				</div>
			</div>
		</>
	)
}
