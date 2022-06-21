import React from 'react'
import * as CgIcons from "react-icons/cg";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";

const SidebarData = [
    {
        title: 'Profile',
        path: '/profile',
        icon: <CgIcons.CgProfile />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <AiIcons.AiOutlineMessage />,
        cName: 'nav-text'
    },
    {
        title: 'Users',
        path: '/users',
        icon: <FiIcons.FiUsers />,
        cName: 'nav-text'
    },
    {
        title: 'Posts',
        path: '/posts',
        icon: <BsIcons.BsFillFileEarmarkPostFill />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <BiIcons.BiLogInCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Register',
        path: '/register',
        icon: <BiIcons.BiRegistered />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <AiIcons.AiFillSetting />,
        cName: 'nav-text'
    },
]
export default SidebarData