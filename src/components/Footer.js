import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
    return (
        <Box
            component='footer'
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: '#d1c4e9'
            }}
        >
            <Container maxWidth='sm'>
                <Typography variant='body1' color='text.secondary'>
                    Tasty Pasty Inc.
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                Copyright © TastyPasty {new Date().getFullYear()}
                </Typography>
            </Container>
        </Box>
    )
}
