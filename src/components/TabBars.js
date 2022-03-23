import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

//material ui comp
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//components
import RecipeList from './RecipeList';
import RecipeListLastAdded from './RecipeListLastAdded';
import UserList from './UserList';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Box>{children}</Box>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ logInUser }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant='fullWidth'>
                    <Tab label="All Recipes" {...a11yProps(0)} />
                    <Tab label="Last 10 Recipes" {...a11yProps(1)} />
                    <Tab label="All users" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <RecipeList logInUser={logInUser}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <RecipeListLastAdded />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <UserList />
            </TabPanel>
        </Box>
    );
}
