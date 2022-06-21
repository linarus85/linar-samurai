import React, { useState } from 'react'
import { MySelect } from '../../select/MySelect'
import ModalPost from './modal/ModalPost'
import PostList from './PostList'
import './Post.css'

const Posts = () => {
  const [post, setPost] = useState([
    { id: 1, title: 'React', body: 'is a JSX' },
    { id: 2, title: 'Redux', body: 'is a store' },
    { id: 3, title: 'Material UI', body: 'is a style' },
  ])
  return (
    <div className='post'>
      <MySelect setPost={setPost} post={post} />
      <ModalPost setPost={setPost} post={post} />
      <PostList setPost={setPost} post={post} />
    </div>
  )
}

export default Posts