import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useRouter } from 'next/router';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const NavBarContainer = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));

const NavBarTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
}));

const CenteredBox = styled(Box)(({ theme }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'white',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Navbar = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleButtonClick = (route) => {
    router.push(route);
    if (isMobile) {
      setDrawerOpen(false);
    }
  };
  const listItems = [
    {text: 'Home', route: '/'},
    {text: 'Multi-Dimensional Stack-up', route: '/multidimensionalstackup'},
    {text: 'About', route: '/about'},
  ];
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}
    >

      {listItems.map((item, index) => (
  <ListItem button key={item.text} onClick={() => handleButtonClick(item.route)}>
    <ListItemText primary={item.text} />
  </ListItem>
))}
    </Box>
  );

  return (
    <NavBarContainer>
      <AppBar position="static">
        <Toolbar>
          <NavBarTitle variant="h6">Tolerance Stack-Up Calculator</NavBarTitle>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml: 2 }}
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor={'right'}
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                onOpen={() => setDrawerOpen(true)}
              >
                {list()}
              </SwipeableDrawer>
            </>
          ) : (
            <CenteredBox>
              <StyledButton onClick={() => handleButtonClick('/')}>Home</StyledButton>
              <StyledButton onClick={() => handleButtonClick('/multidimensionalstackup')}>
                Multi-Dimensional Stack-up
              </StyledButton>
              <StyledButton onClick={() => handleButtonClick('/about')}>About</StyledButton>
            </CenteredBox>
          )}
        </Toolbar>
      </AppBar>
      <BottomNavigation showLabels sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
        <BottomNavigationAction
          sx={{ marginLeft: 'auto' }}
          label="LinkedIn"
          icon={<LinkedInIcon />}
          onClick={() => window.open('https://www.linkedin.com/in/pritamnegi7/', '_blank')}
        />
      </BottomNavigation>
    </NavBarContainer>
  );
};

export default Navbar;
