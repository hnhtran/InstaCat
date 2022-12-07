import React from 'react'
import Post from '../Post/Post'
import * as postsAPI from '../../utilities/posts-api'
import { useState, useEffect } from 'react'

const Posts = ({filterUserId, user, post, setPost}) => {
  const [posts, setPosts] = useState('')
  // load posts from database
  useEffect(() => {
    const getPosts = async () => {
      const updatedPosts = await postsAPI.getPosts(filterUserId)
      setPosts(updatedPosts)
    }
    getPosts()
  }, [post])
  
  
  return (
    <div>
        <h1>Posts</h1>
        {posts ?  
        posts.map(item => <Post posts={posts} setPosts={setPosts} user={user} post={item} setPost={setPost}/>)
        : <p>Loading...</p>}
        {/* <Post user={user} post={post} setPost={setPost}/> */}
    </div>
  )
}

export default Posts