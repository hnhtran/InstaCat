import { AddAPhoto } from "@mui/icons-material/";
import "./NewPost.css";
import FileBase64 from "react-file-base64";
import { useState } from "react";

export default function NewPost() {
  const [postData, setPostData] = useState({
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
		// console.log(postData);
		console.log('Post created!');
	}

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
                </div>
              </div>
              <button type="submit">Add post</button>
            </div>
          </div>
        </form>
      </div>
      <div>
      </div>
    </>
  );
}
