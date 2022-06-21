import React, { useState } from 'react'
import FriendsBlock from '../Profile/account/FriendsBlock'
import Diologs from './Diologs'
import { Box, Grid } from '@mui/material';
import AddPost from './AddPost';
import ava from '../../../images/avatar_1.jpg'
import anime from '../../../images/anime.png'


const Messages = (props) => {

  const [value, setValue] = useState('')
  const [message, setMessage] = useState([
    { id: 1, avatar: ava, text: 'Hello' },
    { id: 2, avatar: anime, text: 'Good morning' },
    { id: 3, avatar: anime, text: 'Hi ' },
  ])
  const onCreate = (e) => {
    e.preventDefault()
    setMessage(message.concat([{
      id: Date.now(),
      text: value,
      avatar: ava
    }]))
    setValue('')
  }

  return (
    <>

      <Box sx={{
        flexGrow: 1,
        ml: 30,
        mt: 5
      }}>
        <Grid container spacing={2}>
          <Grid item xs={4} >
            <FriendsBlock profile={props.profile}
              isOwner={props.isOwner} />
          </Grid>
          <Grid item xs={7}>
            <Diologs message={message} onCreate={onCreate}
              setValue={setValue}
            />
            <AddPost value={value} setValue={setValue}
              onCreate={onCreate} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Messages