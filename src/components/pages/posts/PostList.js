import { Typography } from '@mui/material'
import React from 'react'
import PostItem from './PostItem'
import './Post.css'


const PostList = (props) => {
    if (!props.post.length) {
        return <Typography sx={{ textAlign: 'center' }}
            variant='h6'>Posts undefined</Typography>
    }
    const removePost = (p) => [
        props.setPost(props.post.filter(ps => ps.id !== p.id))
    ]
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                Post List
            </h1>
            {props.post.map((p, index) =>
                <PostItem p={p}
                    number={index + 1}
                    removePost={removePost} />
            )}
        </div>
    )
}

export default PostList