import { AddAPhoto } from "@mui/icons-material/";
import "./NewPost.css";
import FileBase64 from "react-file-base64";
import { useParams } from "react-router-dom"
import { useState } from "react";
import { createPost } from '../../utilities/userProfile-api'


export default function NewPost({user, post, setPost}) {
  let { userId } = useParams()
	// console.log(user)
  const [postData, setPostData] = useState({
	userId: user._id,
  userName: user.name,
  likes: 0,
    description: "",
    image: "",
  })

  const handleChange = (event) => {
		setPostData({
			...postData,
			[event.target.name]: event.target.value,
		});
	}
	//   const handleImageChange = (event) => {
	// 	setPostData({
	// 		...postData,
	// 		image: event.base64,
	// 	});
	// }
	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(postData)
		const newPost = await createPost(postData, userId)
		// console.log(post)
		setPost(newPost)
	}

	// const [image, setImage] = useState(null);
	// const [imageUrl, setImageUrl] = useState(null);
	// const onImageChange = (e) => {
	// 	if(e.target.files && e.target.files[0]){
	// 		setImage(e.target.files[0]);
	// 	}
	// 	// setImage(e.target.files[0]);
	// 	// setImageUrl(URL.createObjectURL(e.target.files[0]));
	// 	setPostData({...postData, image: image})
	// 	// console.log(imageUrl)
	// 	// console.log(image)
	// }

  return (
    <>
      <div className="newPosts" onSubmit={handleSubmit}>
        <form autoComplete="off">
          <div className="newPostsContainer">
            <div className="newPostsTop">
              <img className="postsProfileimg" src='' alt="Add Photo" />
              <input
                placeholder="Show us your cats!"
                className="newPostInput"
				type='text'
				name='description'
				value={postData.description}
				onChange={handleChange}
				required
              />
            </div>
            <hr className="newPostHr" />
            <div className="newPostsBottom">
              <div className="newPostsOptions">
                <div className="option">
                  <AddAPhoto />
                  <span className="newPostsText">Photo</span>
                  <FileBase64
                    type="file"
                    multiple={false}
					name='image'
                    onDone={({ base64 }) => setPostData({...postData, image: base64})}
                  />
				  {/* <input type='file' onChange={onImageChange}/> */}
                </div>
              </div>
              <button className="addPost" type="submit">Add post</button>
            </div>
          </div>
        </form>
      </div>
      <div>
      </div>
    </>
  );
}
