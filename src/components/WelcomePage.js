import { Button, Container, CssBaseline, Grid, Typography } from '@mui/material';
import React from 'react';
import BackgroundImage from '../images/Cooking_Background_01.jpg';
import Meal1 from '../images/Meal01.jpg';
import Meal2 from '../images/Meal02.jpg';
import Meal3 from '../images/Meal03.jpg';
import Meal4 from '../images/Meal04.jpg';
import { deepPurple } from '@mui/material/colors';
import Link from './Link';
import { Box } from '@mui/system';

export default function WelcomePage() {
    const purpleColor = deepPurple[500];

    return (
        <Container component='main' maxWidth='1080px'>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                >
                    <Grid item sm={4} >
                        <Typography
                            component='h2'
                            variant="h4"
                            color={purpleColor}
                        >
                            Welcome to Tasty Pasty
                        </Typography>
                        <Typography
                            component='p'
                            variant="h5"
                        >
                            Find all your favorite recipes here.
                        </Typography>
                        <Link className='item' href='/signup'>
                            <Button variant='contained' color='secondary'>Sign Up</Button>
                        </Link>
                    </Grid>
                    <Grid item sm={8}>
                        <img src={BackgroundImage} />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
                    <Grid item sm={3}>
                        <img src={Meal1} style={{ maxWidth: 400, maxHeight: 400 }} />
                    </Grid>
                    <Grid item sm={3} >
                        <img src={Meal2} style={{ maxWidth: 400, maxHeight: 400 }} />
                    </Grid>
                    <Grid item sm={3}>
                        <img src={Meal3} style={{ maxWidth: 400, maxHeight: 400 }} />
                    </Grid>
                    <Grid item sm={3}>
                        <img src={Meal4} style={{ maxWidth: 400, maxHeight: 400 }} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
