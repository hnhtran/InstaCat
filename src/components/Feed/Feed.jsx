import { SevenKRounded } from "@mui/icons-material"
import NewPost from "../NewPost/NewPost"
import Posts from "../Posts/Posts"
import SeededData from "../../SeededData"
export default function Feed({user, post, setPost}) {
	return (
		<>
			<div className='feed'>
				<div className='feedcontainer'>
					<NewPost user={user} post={post} setPost={setPost}/>
					<Posts post={post} setPost={setPost}/>
				</div>
			</div>
		</>
	)
}
