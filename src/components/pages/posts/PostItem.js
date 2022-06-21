import React from 'react'
import {
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
} from '@mui/material'

const PostItem = (props) => {
    return (
        <Card sx={{
            backgroundColor: '#F1F7FA',
            m: 1,
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <CardContent sx={{ justifyContent: 'space-between' }}>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <Typography variant="h6">
                            {props.number}.{props.p.title}
                        </Typography>
                        <Typography variant="body2">
                            {props.p.body}
                        </Typography>

                    </Grid>
                    <Button color="secondary"
                        sx={{ m: 3, ml: 60 }}
                        onClick={() => props.removePost(props.p)}>
                        Delete
                    </Button>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default PostItem