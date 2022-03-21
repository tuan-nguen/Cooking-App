import { Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';

export default function UserCard({ user }) {
    return (
        <Card sx={{ maxWidth: 270 }}>
            <CardHeader
                avatar={
                    <Avatar
                        alt={user.firstName.charAt(0) + user.lastName.charAt(0)}
                        src={user.userAvatar}
                    />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={`${user.firstName} ${user.lastName}`}
                subheader={user.dateOfRegistry}
            />
            <CardContent>
                <Typography variant="body1" color="text.secondary">
                    <b>Gender:</b> {user.userSex} 
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    <b>Role:</b> {user.userType} 
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    <b>Description:</b> {user.userDescription}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button variant='contained'>
                    {user.userStatus}
                </Button>
            </CardActions>
        </Card>
    )
}
