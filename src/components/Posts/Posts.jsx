import React from 'react'
import Post from '../Post/Post'
import * as postsAPI from '../../utilities/posts-api'
import * as usersProfilesAPI from '../../utilities/userProfile-api'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

const Posts = ({user, post, setPost}) => {
  const [posts, setPosts] = useState('')
  // { userId } is default name ob object in react to retrieve useParams
  let { userId } = useParams()


  // load posts from database
  useEffect(() => {
    const getPosts = async () => {
      if (!userId) {
        const updatedPosts = await postsAPI.getPosts()
        // const data = await updatedPosts.json()
      console.log(updatedPosts)
        setPosts(updatedPosts)
      }
      else {
      const updatedPosts = await usersProfilesAPI.getPosts(userId)
      setPosts(updatedPosts)
      }
    }
    getPosts()
  }, [post])
  
  
  return (
    <div>
        <h1>Posts</h1>
        {/* {console.log(posts[3])} */}
         {/* if req.params == userid ? run the map
         
         */}
        {posts ?  
        posts.map(item => <Post user={user} post={item} />)
        : <p>Loading...</p>}
        {/* <Post user={user} post={post} setPost={setPost}/> */}
    </div>
  )
}

export default Posts