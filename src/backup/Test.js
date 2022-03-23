import React from 'react';
import UserApiClient from '../service/user-api-client'; 

export default function Test() {
    let textEdit = ''; 
    function handleClick() {
        UserApiClient.addUserFavoriteRecipes(3)
    }

    return (
        <button onClick={handleClick}>test</button>
    )
}
