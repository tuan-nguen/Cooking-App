import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Avatar, Container, CssBaseline, Grid, Typography, TextField, FormControl,
    FormLabel, RadioGroup, Radio, FormControlLabel, Button
} from '@mui/material';
import { Box } from '@mui/system';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { User } from '../models/user-model';
import UserApiClient from '../service/user-api-client';
import { Link } from 'react-router-dom'
import male from '../images/male.jpg'; 
import female from '../images/female.jpg'; 

function UserSignUpForm({ setHasSignUp, isUpdating }) {
    const [gender, setGender] = useState();
    const [role, setRole] = useState();
    const [status, setStatus] = useState();

    const url = window.location.pathname;
    const updateUserId = url.substring(url.lastIndexOf('/') + 1);

    function handleSubmitSignUpForm(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const firstName = data.get('firstName');
        const lastName = data.get('lastName');
        const username = data.get('username');
        const password = data.get('password');
        const image = data.get('image');
        const shortDescription = data.get('shortDescription');
        const currentDate = new Date();
        const dateOfRegistry = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} - ${currentDate.getHours()}:${currentDate.getMinutes()}`;

        if (username.length > 15 || password.length < 8 || !/\d/.test(password) || shortDescription.lenght > 512) {
            return false;
        } else {
            const newUser = new User(firstName, lastName, username, password, gender, role, image, shortDescription, status, dateOfRegistry);
            console.log(newUser);
            UserApiClient.postNewUser(newUser);
            setHasSignUp(true); 
        }
    }

    function handleUpdateUser(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const firstName = data.get('firstName');
        const lastName = data.get('lastName');
        const username = data.get('username');
        const password = data.get('password');
        const image = data.get('image');
        const shortDescription = data.get('shortDescription');
        const currentDate = new Date();
        const dateOfRegistry = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} - ${currentDate.getHours()}:${currentDate.getMinutes()}`;

        if (username.length > 15 || password.length < 8 || !/\d/.test(password) || shortDescription.lenght > 512) {
            return false;
        } else {
            const updatedUser = new User(firstName, lastName, username, password, gender, role, image, shortDescription, status, dateOfRegistry);
            console.log(updatedUser);
            UserApiClient.updateUser(updatedUser, updateUserId);
            setHasSignUp(true); 
        }
    }

    return (
        <Container component='main' maxWidth='sm'>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {isUpdating ? "Update User" : "Sign Up"}
                </Typography>

                <Box component="form" sx={{ mt: 3 }} onSubmit={isUpdating ? handleUpdateUser : handleSubmitSignUpForm}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="username"
                                label="Username"
                                type="username"
                                id="username"
                                autoComplete="username"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name='image'
                                label='Image URL'
                                type='url'
                                id='image'
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <FormControl>
                                <FormLabel>Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="gender"
                                >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" onChange={(e) => setGender(e.target.value)} />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" onChange={(e) => setGender(e.target.value)} />
                                </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <FormControl>
                                <FormLabel>Role</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="role"
                                >
                                    <FormControlLabel value="user" control={<Radio />} label="User" onChange={(e) => setRole(e.target.value)} />
                                    <FormControlLabel value="admin" control={<Radio />} label="Admin" onChange={(e) => setRole(e.target.value)} />
                                </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                name='shortDescription'
                                label='Short Description'
                                type='text'
                                id="shortDescription"
                                multiline
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">User status</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value='active' control={<Radio />} label='Active' onChange={(e) => setStatus(e.target.value)} />
                                    <FormControlLabel value='suspended' control={<Radio />} label='Suspended' onChange={(e) => setStatus(e.target.value)} />
                                    <FormControlLabel value='deactivated' control={<Radio />} label='Deactivated' onChange={(e) => setStatus(e.target.value)} />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 1, mb: 1 }}
                            >
                                {isUpdating ? "Update User" : "Sign Up"}
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Link to='/'>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ mb: 5, bgcolor: '#673ab7' }}
                                >
                                    Back to Home page
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

UserSignUpForm.propTypes = {}

export default UserSignUpForm;
