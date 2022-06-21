import React from 'react'
import {
    Card,
    CardContent,
    Divider,
    Grid,
} from '@mui/material';
import { MessagePost } from './MessagePost';

const Diologs = (props) => {


    return (
        <Card sx={{
            backgroundColor: '#F1F7FA'
        }}>
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
                        {props.message.map(mes => {
                            return <MessagePost message={mes}
                                setValue={props.setValue}
                                key={mes.id} />
                        })}
                    </Grid>

                </Grid>
            </CardContent>
            <Divider />

        </Card>
    )
}

export default Diologs