import React from 'react'
import Post from '../Post/Post'

const Posts = ({user, post, setPost}) => {
  return (
    <div>
        <h1>Posts</h1>
        <Post user={user} post={post} setPost={setPost}/>
    </div>
  )
}

export default Posts