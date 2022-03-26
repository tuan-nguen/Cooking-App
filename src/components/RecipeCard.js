import * as React from 'react';
import { useState } from 'react';
import UserApiClient from '../service/user-api-client'; 

//material components
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';

//icons
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard({ recipe, setFavoriteRecipes, favoriteRecipes }) {
    const [expanded, setExpanded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(favoriteRecipes.includes(recipe.id)); 

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleFavoriteButton = () => { 
        
        if(isFavorite) {
            setIsFavorite(false); 
            setFavoriteRecipes(favoriteRecipes.filter(id => id !== recipe.id)); 
        } else {
            setIsFavorite(true); 
            setFavoriteRecipes(oldRecipes => [...oldRecipes, recipe.id]);
        }
    }; 

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" >
                        {recipe.username.charAt(0)}
                    </Avatar>
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
                                <Button href={`recipe-form/${recipe.id}`}>Edit recipe</Button>
                            </MenuItem>
                        </Menu>
                    </IconButton>
                }
                title={recipe.recipeName}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={recipe.imageResult}
                alt={recipe.recipeName}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {recipe.shortDescription}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={handleFavoriteButton}>
                    {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                <IconButton aria-label="share">
                    <AccessTimeFilledIcon /> 
                </IconButton>
                <Typography variant='subtitle2'>{`${recipe.duration[0]}h ${recipe.duration[1]}min`}</Typography>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Products:</Typography>
                    <Typography paragraph>
                        {recipe.products}
                    </Typography>
                    <Typography paragraph>Directions:</Typography>
                    <Typography paragraph>
                        {recipe.fullDescription}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}