import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Button, Checkbox, Container, CssBaseline, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import BlenderIcon from '@mui/icons-material/Blender';
import { Recipe } from '../models/recipe-model';
import UserApiClient from '../service/user-api-client'; 

function RecipeForm({ logInUser, setRecipePosted, isUpdating }) {
    const [hour, setHour] = useState('0');
    const [minutes, setMinutes] = useState('0');
    const [tags, setTags] = useState([]);

    const url = window.location.pathname;
    const updateRecipeId = url.substring(url.lastIndexOf('/') + 1);

    function handleHourChange(event) {
        setHour(event.target.value);
    }

    function handleMinuteChange(event) {
        setMinutes(event.target.value);
    }

    function handleTagChange(event) {
        let newArr = [...tags];
        const checkedValue = event.target.value;
        if (newArr.indexOf(checkedValue) > -1) {
            newArr.splice(newArr.indexOf(checkedValue), 1);
            setTags(newArr);
        } else {
            setTags(oldArray => [...oldArray, checkedValue]);
        }
    }

    function handleRecipeSubmit(event) {
        event.preventDefault();

        const data = new FormData(event.target);
        const recipeName = data.get('recipeName');
        const shortDescription = data.get('shortDescription');
        const duration = [hour, minutes];
        const products = data.get('products');
        const image = data.get('image');
        const fullDescription = data.get('fullDescription');

        if(recipeName.length > 80 || shortDescription.length > 256 || fullDescription.length > 2048) {
            return false; 
        } else {
            const newRecipe = new Recipe(
                recipeName, shortDescription, duration,
                products, image, fullDescription, tags, logInUser.id, logInUser.username
            );
            UserApiClient.postNewRecipe(newRecipe); 
            setRecipePosted(true);
        }
    }

    function handleRecipeUpdate(event) {
        event.preventDefault();

        const data = new FormData(event.target);
        const recipeName = data.get('recipeName');
        const shortDescription = data.get('shortDescription');
        const duration = [hour, minutes];
        const products = data.get('products');
        const image = data.get('image');
        const fullDescription = data.get('fullDescription');

        if(recipeName.length > 80 || shortDescription.length > 256 || fullDescription.length > 2048) {
            return false; 
        } else {
            const updatedRecipe = new Recipe(
                recipeName, shortDescription, duration,
                products, image, fullDescription, tags, logInUser.id, logInUser.username
            );
            UserApiClient.putUpdateRecipe(updatedRecipe, updateRecipeId); 
            setRecipePosted(true);
        }
    }

    return (
        <Container component='main' maxWidth='sm'>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <BlenderIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    {isUpdating ? "Update a Recipe" : "Post your Recipe"}
                </Typography>

                <Box component='form' sx={{ mt: 2 }} onSubmit={isUpdating ? handleRecipeUpdate : handleRecipeSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name='recipeName'
                                id='recipeName'
                                autoComplete='recipe-name'
                                label='Recipe Name'
                            />
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
                            <FormControl required sx={{ minWidth: 120 }} name='hours' id='hours'>
                                <InputLabel>Hours</InputLabel>
                                <Select
                                    fullWidth
                                    label='Hours'
                                    value={hour}
                                    onChange={handleHourChange}
                                >
                                    <MenuItem selected value='0'>0</MenuItem>
                                    <MenuItem value='1'>1</MenuItem>
                                    <MenuItem value='2'>2</MenuItem>
                                    <MenuItem value='3'>3</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl required sx={{ ml: 3, minWidth: 120 }} name='minutes' id='minutes'>
                                <InputLabel>Minutes</InputLabel>
                                <Select
                                    fullWidth
                                    label='Minutes'
                                    value={minutes}
                                    onChange={handleMinuteChange}
                                >
                                    <MenuItem selected value='0'>0</MenuItem>
                                    <MenuItem value='10'>10</MenuItem>
                                    <MenuItem value='20'>20</MenuItem>
                                    <MenuItem value='30'>30</MenuItem>
                                    <MenuItem value='40'>40</MenuItem>
                                    <MenuItem value='50'>50</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                name='products'
                                label='Products'
                                type='text'
                                id="products"
                                multiline
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name='image'
                                label='Image Result'
                                type='url'
                                id='image'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                name='fullDescription'
                                label='Full Description'
                                type='text'
                                id="fullDescription"
                                minRows={3}
                                multiline
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component='div'>Tags</Typography>
                            <FormGroup onChange={handleTagChange}>
                                <FormControlLabel control={<Checkbox />} label='Breakfast' value='breakfast' />
                                <FormControlLabel control={<Checkbox />} label='Lunch' value='lunch' />
                                <FormControlLabel control={<Checkbox />} label='Dinner' value='dinner' />
                                <FormControlLabel control={<Checkbox />} label='Desert' value='desert' />
                                <FormControlLabel control={<Checkbox />} label='Vegan' value='vegan' />
                                <FormControlLabel control={<Checkbox />} label='Vegetarian' value='vegetarian' />
                                <FormControlLabel control={<Checkbox />} label='Dairy-Free' value='dairy-free' />
                                <FormControlLabel control={<Checkbox />} label='Gluten-Free' value='gluten-free' />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 1, mb: 1, bgcolor:'#673ab7' }}
                            >
                                {isUpdating ? "Update a Recipe" : "Post a new Recipe"}
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Link to='/sign-in'>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    
                                    sx={{ mb: 5, bgcolor:'#673ab7' }}
                                >
                                    Back to Profile
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

RecipeForm.propTypes = {}

export default RecipeForm; 
