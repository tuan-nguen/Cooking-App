import * as React from 'react';
import { useState, useEffect } from 'react';
import UserApiClient from '../service/user-api-client';
import { Link } from 'react-router-dom';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Avatar } from '@mui/material';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.text.primary, 0.1),
    '&:hover': {
        backgroundColor: alpha(theme.palette.text.primary, 0.15),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


export default function HeaderUser({ currentUser, setIsLogInForm }) { 
    const userAvatar = currentUser.userAvatar; 
    const firstName = currentUser.firstName;
    const lastName = currentUser.lastName;

    function handleSignOut() {
        setIsLogInForm(false);
    }

    return (
        <Box
            sx={{
                flexGrow: 1,
                mb: 2,
                boxShadow: "none",
            }}
        >
            <AppBar
                position="static"
                sx={{
                    bgcolor: "#673ab7",
                    color: 'black'
                }}
            >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='#ede7f6'>
                        Tasty Pasty
                    </Typography>
                    <Search
                        sx={{ flexGrow: 1 }}
                        color='text.primary'
                    >
                        <SearchIconWrapper >
                            <SearchIcon sx={{ color: '#ede7f6' }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            sx={{ color: '#ede7f6' }}
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1, display: 'inline-flex', flexDirection: 'row-reverse' }}>
                        <Avatar alt={`${firstName} ${lastName}`} src={userAvatar}/>
                        <Link to='/'>
                            <Button
                                variant='contained'
                                sx={{ ml: 1, mr: 1, bgcolor: '#ede7f6', color: '#673ab7' }}
                                onClick={handleSignOut}
                            >
                                Sign out
                            </Button>
                        </Link>
                        <Link to='/recipe-form'>
                            <Button
                                variant='outlined' sx={{ ml: 1, mr: 1, color: '#ede7f6', }}
                            >
                                Create Recipe
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

