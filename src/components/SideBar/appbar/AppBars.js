import React from 'react'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom";
import { Box, Button } from '@mui/material';
import ava from '../../../images/avatar_1.jpg'
import './AppBar.css'



const AppBars = (props) => {

    const [userAppBar, setuserAppBar] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setuserAppBar(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        props.logout()
        setuserAppBar(null);

    };

    return (
        <>

            <Box sx={{ flexGrow: 0 }} className='box'>
                <Tooltip title="Open profile" >
                    {props.isAuth
                        ? <>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                                <Avatar alt="" src={ava} />
                            </IconButton>
                            <Typography variant='subtitle2'
                                sx={{ color: 'primary.main', textDecoration: 'none' }}>
                                {props.login}
                            </Typography>
                        </>
                        : <NavLink to={'/login'}>
                            <Button variant="outlined" color="success"  >
                                Login
                            </Button>
                        </NavLink>
                    }
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    // userAppBar={userAppBar}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}

                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(userAppBar)}
                    onClose={handleCloseUserMenu}
                >
                    <NavLink to='/profile'><MenuItem onClick={handleOpenUserMenu}>Profile</MenuItem></NavLink>
                    <a href='/login'> <MenuItem onClick={handleCloseUserMenu}>Logout</MenuItem></a>
                </Menu>
            </Box>

        </>
    )
}

export default AppBars

