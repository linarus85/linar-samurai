import React from 'react'
import styles from './Users.module.css'
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper'
import { Button } from '@mui/material'

const UsersButton = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? '' : undefined;

  return (
    <div >
      <div className={styles.name}>
        <Button onClick={handleClick}>
          {props.name}
        </Button>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Box sx={{ border: 1, p: 1, bgcolor: 'white' }}>
            {props.status}
          </Box>
        </Popper>
      </div>
    </div>
  )
}

export default UsersButton