import { Container, Grid, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UserApiClient from '../service/user-api-client';
import RecipeReviewCard from './RecipeCard';

export default function RecipeList({ favoriteRecipes, setFavoriteRecipes }) {
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
        <Container component='main'>
            <Box>
                <Grid container spacing={2}>
                    {recipes.slice(Math.max(recipes.length - 10, 1)).map(recipe => (
                        <Grid item sm={4} key={recipe.id}>
                            <RecipeReviewCard recipe={recipe} setFavoriteRecipes={setFavoriteRecipes} favoriteRecipes={favoriteRecipes} />
                        </Grid>
                    ))
                    }
                </Grid>
            </Box>
        </Container>
    )
}
