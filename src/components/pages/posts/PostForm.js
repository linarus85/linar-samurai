import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const PostForm = (props) => {
  const [ps, setPs] = useState({ title: '', body: '' })

  const addPost = (e) => {
    e.preventDefault()
    props.setPost([...props.post, { ...ps, id: Date.now() }])
    setPs({ title: '', body: '' })
    props.handleClose()
  }

  return (
    <div>
      <div>
        <TextField fullWidth label="post title"
          variant="filled" color="success" focused
          InputProps={{ sx: { borderRadius: '10px' } }}
          value={ps.title}
          onChange={e => setPs({ ...ps, title: e.target.value })} />
      </div>
      <div>
        <TextField fullWidth label="post description"
          variant="filled" color="success" focused
          InputProps={{ sx: { borderRadius: '10px' } }}
          value={ps.body}
          onChange={e => setPs({ ...ps, body: e.target.value })} />
      </div>
      <div>
        <Button variant='contained' sx={{ m: 1 }}
          onClick={addPost}>
          Create post
        </Button>
      </div>
    </div>
  )
}

export default PostForm