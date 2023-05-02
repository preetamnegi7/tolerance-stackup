import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, MenuItem, List, ListItemText, Divider, ListItem, ListItemIcon, Box } from '@mui/material';
import { useRouter } from 'next/router';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleMenuClick = () => {
        setOpen(!open);
    };

    const handleMenuItemClick = (route) => {
        router.push(route);
        setOpen(false);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuClick}
                        sx={{ marginRight: '16px' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Tolerance Stack-Up Calculator
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={open} onClose={handleMenuClick}>
                <List sx={{ width: '250px', paddingTop: '10px' }}>
                    <MenuItem onClick={() => handleMenuItemClick('/')}>
                        <ListItemText primary="Home" primaryTypographyProps={{ variant: 'subtitle1' }} />
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('/multidimensionalstackup')}>
                        <ListItemText primary="Multi-Dimensional Stack-up" primaryTypographyProps={{ variant: 'subtitle1' }} />
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('/about')}>
                        <ListItemText primary="About" primaryTypographyProps={{ variant: 'subtitle1' }} />
                    </MenuItem>
                    
                    <Divider />
                    <Box sx={{ flexGrow: 1 }} />
                    <ListItem>
                        <ListItemIcon>
                            <LinkedInIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="LinkedIn"
                            primaryTypographyProps={{ variant: 'subtitle1' }}
                            onClick={() => window.open('https://www.linkedin.com/in/pritamnegi7/', '_blank')}
                        />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default Navbar;
