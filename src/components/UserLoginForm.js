import PropTypes from 'prop-types';
import { Avatar, Box, Container, CssBaseline, TextField, Typography, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState, useEffect } from 'react';
import UserApiClient from '../service/user-api-client';
import { Link } from 'react-router-dom'; 

function UserLoginForm({ setIsLoggedIn, setLogInUser }) {
    const [dbUsername, setDbUsername] = useState([]);
    const [dbPassword, setDbPassword] = useState([]);
    const [dbUsers, setDbUsers] = useState([]); 

    useEffect(() => {
        UserApiClient.fetchUsers()
            .then(results => {
                results.map(user => {
                    setDbUsers(oldUsers => [...oldUsers, user]); 
                    setDbUsername(oldUsers => [...oldUsers, user.username]);
                    setDbPassword(oldPassword => [...oldPassword, user.password]);
                })
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    function handleSubmitSignInForm(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = data.get('username');
        const password = data.get('password');
        if (dbUsername.includes(username)) {
            const index = dbUsername.indexOf(username);
            if (dbPassword[index] === password) {
                setIsLoggedIn(true);
                setLogInUser(dbUsers[index]);
                console.log(dbUsers[index]);
            }
        }
    }

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography>
                    Sign in
                </Typography>
                <Box component='form' sx={{ mt: 1 }} onSubmit={handleSubmitSignInForm}>
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        label='Username'
                        name='username'
                        id='username'
                        autoComplete='username'
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 1 }}
                    >
                        Log In
                    </Button>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2 }}
                            // onClick={handleBackButton}
                        >
                            Back to Home Page
                        </Button>
                    </Link>
                    <Link href='/signup'>
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Box>
            </Box>
        </Container>
    )
}

UserLoginForm.propTypes = {}

export default UserLoginForm;
