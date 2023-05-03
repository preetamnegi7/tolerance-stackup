import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useRouter } from 'next/router';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

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

  const handleButtonClick = (route) => {
    router.push(route);
  };

  return (
    <NavBarContainer>
      <AppBar position="static">
        <Toolbar>
          <NavBarTitle variant="h6">Tolerance Stack-Up Calculator</NavBarTitle>
          <Box sx={{ flexGrow: 1 }} />
          <CenteredBox>
            <StyledButton onClick={() => handleButtonClick('/')}>Home</StyledButton>
            <StyledButton onClick={() => handleButtonClick('/multidimensionalstackup')}>
              Multi-Dimensional Stack-up
            </StyledButton>
            <StyledButton onClick={() => handleButtonClick('/about')}>About</StyledButton>
          </CenteredBox>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1 }} />
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
