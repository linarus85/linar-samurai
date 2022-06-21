import { Avatar, Chip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const MessagePost = (props) => {
    // const sumbitHandler = (e) => {
    //     e.preventDefault()
    //     if (props.value.trim()) {
    //         props.onCreate(props.value)
    //     }
    //     props.setValue('')
    // }
    return (
        <>
                <Box sx={{
                    display: 'grid',
                    gridAutoColumns: '1fr',
                }}>
                    <Avatar alt='' src={props.message.avatar}
                        sx={{
                            height: 50,
                            mb: 2,
                            ml: 5,
                            width: 50,
                            gridRow: '1', gridColumn: 'span 1'
                        }}
                    />
                    <Typography
                        color="textPrimary"
                        variant="h7"
                        sx={{
                            gridRow: '1', gridColumn: '2/5',
                            m: 2,
                        }}

                    ><Chip
                            label={props.message.text}
                            variant="outlined"
                            deleteIcon={'z'}
                        />
                    </Typography>
                </Box>
        </>
    )
}
