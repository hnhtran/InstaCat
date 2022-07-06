import { SevenKRounded } from "@mui/icons-material"
import NewPost from "../NewPost/NewPost"
import Posts from "../Posts/Posts"
import SeededData from "../../SeededData"
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
