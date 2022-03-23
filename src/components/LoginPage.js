import React, {useEffect, useState} from 'react';
import HeaderUser from './HeaderUser';
import Footer from './Footer';
import { Box } from '@mui/system';
import UserApiClient from '../service/user-api-client'; 
import TabBars from './TabBars';

export default function LoginPage({ logInUser, setIsLogInForm }) {
  const [currentUser, setCurrentUser] = useState({}); 

  useEffect(() => {
    UserApiClient.fetchUserId(logInUser.id)
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
      <TabBars logInUser={logInUser}/>
      <Footer />
    </Box>
  )
}