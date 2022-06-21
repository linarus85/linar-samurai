import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const AddPost = (props) => {

 
  
    return (
        
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '85ch' },
                    border: '1px solid #ccc',
                    borderRadius: '10'
                }}
                noValidate
                autoComplete="off"
            >
                <Stack spacing={2} direction="row" >
                    <TextField label="send message here" variant="outlined"
                        sx={{ width: 2 / 3 }}
                        value={props.value}
                        onChange={e => props.setValue(e.target.value)}
                        InputProps={{
                            sx: {
                                borderRadius: '25px', bgcolor: '#F8F8F8',
                                overflowY: 'auto'
                            }
                        }}
                    />
                    <Button variant="outlined"
                       onClick={props.onCreate} >Add post</Button>
                </Stack>
            </Box>
    )
}

export default AddPost