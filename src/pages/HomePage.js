import { Box } from '@mui/system'
import React from 'react'
import Header from '../components/Header'
import WelcomePage from '../components/WelcomePage'
import Footer from '../components/Footer'

export default function HomePage() {
    return (
        <Box>
            <Header />
            <WelcomePage />
            <Footer />
        </Box>

    )
}
