import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Input,
    Typography
} from '@mui/material';


export const AccountProfile = (props) => {

    
    const onMainPhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <Card sx={{
            backgroundColor:'#F1F7FA'
        }}>
            <CardContent>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Avatar
                        src={props.profile.photos.large}
                        sx={{
                            height: 164,
                            mb: 2,
                            width: 164,
                        }}
                    />
                    <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="h5"
                    >
                        {props.profile.fullName}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {props.profile.aboutMe}
                    </Typography>
                </Box>
            </CardContent>
            <Divider />
            <CardActions>
                <Button
                    variant="text"
                    component="label"
                    color="primary"
                    fullWidth
                >
                    Upload File
                    {props.isOwner && <Input
                        sx={{ display: 'none' }}
                        type="file" accept="image/*"
                        multiple
                        onChange={onMainPhoto}
                    />}
                </Button>

            </CardActions>
        </Card>
    )
};

