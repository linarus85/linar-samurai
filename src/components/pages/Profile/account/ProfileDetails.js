import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    Link,
    Typography
} from '@mui/material';
import ProfileStatus from '../status/ProfileStatus';



export const AccountProfileDetails = (props) => {

    return (
        <Card sx={{
            backgroundColor: '#F1F7FA'
        }}>
            <CardHeader
                title="Profile"
            />
            <ProfileStatus status={props.status}
                updateStatus={props.updateStatus} />
            <Divider />
            <CardContent>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        {props.isOwner && <Typography
                            color="textPrimary"
                            gutterBottom
                            variant="h6"
                        >
                            JOB: React,Redux,Material UI{props.profile.lookingForAJobDescription}
                        </Typography>}
                    </Grid>
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >

                    </Grid>
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <Typography
                            color="textPrimary"
                            gutterBottom
                            variant="h7"
                        >
                            facebook: {props.isOwner &&
                                <Link target="_blank" href="https://ru-ru.facebook.com/" underline="hover">My facebook</Link>}
                            {props.profile.contacts.facebook}
                        </Typography>
                        <Divider />
                        <Typography
                            color="textPrimary"
                            gutterBottom
                            variant="h7"
                        >
                            vk:  {props.isOwner &&
                                <Link target="_blank" href="https://vk.com/linarus85" underline="hover">My contact</Link>}
                            {props.profile.contacts.vk}
                        </Typography>
                        <Divider />
                        <Typography
                            color="textPrimary"
                            gutterBottom
                            variant="h7"
                        >
                            instagram:  {props.isOwner &&
                                <Link target="_blank" href="https://www.instagram.com/" underline="hover">My instagram</Link>}
                            {props.profile.contacts.instagram}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <Divider />
        </Card>
    );
};
