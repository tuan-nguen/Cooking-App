import { Container, Grid, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UserApiClient from '../service/user-api-client';
import UserCard from './UserCard';

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserApiClient.fetchUsers()
            .then((results) => {
                setUsers(results);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <Container component='main'>
            <Box>
                <Grid container spacing={2}>
                    {users.map(user => (
                        <Grid item sm={3} key={user.id}>
                            <UserCard user={user} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}
