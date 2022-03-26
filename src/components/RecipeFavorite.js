import { Container, Grid, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UserApiClient from '../service/user-api-client';
import RecipeReviewCard from './RecipeCard';

export default function RecipeFavorite({ favoriteRecipes, setFavoriteRecipes }) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        UserApiClient.fetchRecipes()
            .then((results) => {
                setRecipes(results);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <Container component={'div'}>
            <Box>
                <Grid container spacing={2}>
                    {recipes
                        .filter(recipe => favoriteRecipes.includes(recipe.id))
                        .map(recipe => (
                            <Grid item sm={4} key={recipe.id}>
                                <RecipeReviewCard recipe={recipe} setFavoriteRecipes={setFavoriteRecipes} favoriteRecipes={favoriteRecipes} />
                            </Grid>
                        ))}
                </Grid>
            </Box>
        </Container>
    )
}
