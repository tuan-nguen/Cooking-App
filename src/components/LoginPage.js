import React, {useEffect, useState} from 'react';
import HeaderUser from './HeaderUser';
import Footer from './Footer';
import { Box } from '@mui/system';
import UserApiClient from '../service/user-api-client'; 

import maleAvatar from '../images/male.jpg'; 
import femaleAvatar from '../images/female.jpg'; 
import RecipeList from './RecipeList';
import TabBars from './TabBars';

export default function LoginPage({ logInUserId, setIsLogInForm }) {
  const [currentUser, setCurrentUser] = useState({}); 

  useEffect(() => {
    UserApiClient.fetchUserId(logInUserId)
    .then(result => {
      setCurrentUser(result); 
    })
    .catch(error => {
      console.log(error); 
    })
  }, [])

  return (
    <Box>
      <HeaderUser currentUser={currentUser} setIsLogInForm={setIsLogInForm} />
      <TabBars />
      <Footer />
    </Box>
  )
}
