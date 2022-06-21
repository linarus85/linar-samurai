import React from 'react'
import { Container, Grid } from '@mui/material';
import { AccountProfileDetails } from './account/ProfileDetails';
import { AccountProfile } from './account/AccountProfile';
import PhotoBlock from './account/PhotoBlock';
import FriendsBlock from './account/FriendsBlock';
import Loader from '../../Loader/Loader';





const Profile = (props) => {
  if (!props.profile) {
    return <Loader />
  }

  return (
    <>
      <Container maxWidth="lg"
        sx={{ mt: 3 }} >
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile profile={props.profile}
              isOwner={props.isOwner}
              savePhoto={props.savePhoto}
            />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails profile={props.profile}
              status={props.status}
              updateStatus={props.updateStatus}
              isOwner={props.isOwner}/>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg"
        sx={{ mt: 1 }} >
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <FriendsBlock profile={props.profile}
              isOwner={props.isOwner}

            />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <PhotoBlock profile={props.profile}
              isOwner={props.isOwner}
            />
          </Grid>
        </Grid>
      </Container>

    </>
  )
}

export default Profile