import React, { useEffect, useState } from 'react';
import HeaderUser from './HeaderUser';
import Footer from './Footer';
import { Box } from '@mui/system';
import UserApiClient from '../service/user-api-client';
import TabBars from './TabBars';

export default function LoginPage({ logInUser, setIsLogInForm }) {

  return (
    <Box>
      <HeaderUser logInUser={logInUser} setIsLogInForm={setIsLogInForm} />
      <TabBars logInUser={logInUser} />
      <Footer />
    </Box>
  )
}