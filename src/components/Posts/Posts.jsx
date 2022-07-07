import React from 'react'
import Post from '../Post/Post'
import * as postsAPI from '../../utilities/posts-api'
import { useState, useEffect } from 'react'

const Posts = ({user, post, setPost}) => {
  const [posts, setPosts] = useState('')

  // load posts from database
  useEffect(() => {
    const getPosts = async () => {
      const updatedPosts = await postsAPI.getPosts()
      // const data = await response.json()
      // console.log(updatedPosts)
      setPosts(updatedPosts)
    }
    getPosts()
  }, [post])
  
  
  return (
    <div>
        <h1>Posts</h1>
        {/* {console.log(posts[3])} */}

        {posts ? 
        posts.map(item => <Post user={user} post={item} />)
        : <p>Loading...</p>}
        {/* <Post user={user} post={post} setPost={setPost}/> */}
    </div>
  )
}

export default Posts