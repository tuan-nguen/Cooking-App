import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom'; 

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


export default function Header() {
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
                    <Box sx={{ flexGrow: 1, display: 'inline-flex', flexDirection: 'row-reverse' }}>
                        <Link to='/sign-up' style={{ textDecoration: 'none' }}>
                            <Button
                                variant='contained'
                                sx={{ ml: 1, mr: 1, bgcolor: '#ede7f6', color: '#673ab7' }}
                            >
                                Sign up
                            </Button>
                        </Link>
                        <Link to='/sign-in' style={{ textDecoration: 'none' }}>
                            <Button
                                variant='outlined' sx={{ ml: 1, mr: 1, color: '#ede7f6', }}
                            >
                                Login
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

