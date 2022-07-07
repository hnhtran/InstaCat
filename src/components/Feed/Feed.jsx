import { SevenKRounded } from "@mui/icons-material"
import { useParams } from "react-router-dom"
import NewPost from "../NewPost/NewPost"
import Posts from "../Posts/Posts"
import SeededData from "../../SeededData"
export default function Feed({user, post, setPost}) {
	let { userId } = useParams();
	// userId ? console.log(userId) : console.log('no userId')
	return (
		<>
			<div className='feed'>
				<div className='feedcontainer'>
					{userId ? 
					<>
					<NewPost user={user} post={post} setPost={setPost}/> 
					<Posts post={post} setPost={setPost}/>
					</>
					
					: <Posts post={post} setPost={setPost}/>}
					
					
				</div>
			</div>
		</>
	)
}
