import { Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { React, useState } from 'react';

export default function UserCard({ user }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
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
                        <MoreVertIcon onClick={handleClick} />
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem >
                                <Button href={`update-user/${user.id}`}>Edit user</Button>
                            </MenuItem>
                        </Menu>
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
