import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/logo.svg';
import usd from '../assets/currency/usd.svg';
import eur from '../assets/currency/eur.svg';
import gbp from '../assets/currency/gbp.svg';
import { useState } from "react";
import { Link, Drawer } from "@mui/material";
import closeIcon from "../assets/close-icon.svg";


const pages = ['OSRS Gold', 'RS3 Gold', 'Sell RS Gold', 'OSRS Items', 'OSRS Accounts', 'Reward Chests'];

const currency = [
  {
  name: 'USD',
  image: usd
  },
  {
    name: 'EUR',
    image: eur
  },
  {
    name: 'GBP',
    image: gbp
  },
];

const Navigation = ({ getCurrency }) => {
  const [anchorElCurrency, setAnchorElCurrency] = useState(null);
  const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState({
    name: 'USD',
    image: usd
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenCurrencyMenu = (event) => {
    setAnchorElCurrency(event.currentTarget);
    setIsCurrencyMenuOpen(!isCurrencyMenuOpen)
  };

  const handleCloseCurrencyMenu = () => {
    setAnchorElCurrency(null);
    setIsCurrencyMenuOpen(false);
  };

  const handleSelectCurrency = (currency) => {
    setSelectedCurrency(currency);
    getCurrency(currency.name);
    setIsCurrencyMenuOpen(false);
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#142241' }}>
      <Container maxWidth="xl" sx={{ paddingInline: { xs: '20px !important', md: '70px !important' } }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={Logo} alt="logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              open={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
              ModalProps={{
                sx: {
                  width: '100vw',
                  '& > .MuiPaper-root': {
                    minWidth: '90%',
                    backgroundColor: '#142241',
                    paddingInline: '16px',
                    paddingBlock: '32px'
                  }
                }
              }}
            >
              <Box>
                <Button onClick={() => setIsMobileMenuOpen(false)} sx={{ marginBottom: '30px' }}>
                  <img src={closeIcon} alt="close" />
                </Button>
                {pages.map((page, key) => (
                  <Button
                    key={page}
                    sx={{
                      paddingBlock: '10px',
                      borderTop: '1px solid #fff',
                      color: key === 0 ? '#E9B109' : 'white',
                      display: 'block',
                      textTransform: 'unset',
                      fontSize: 14,
                      fontWeight: 500,
                      position: 'relative',
                      width: '100%',
                      borderRadius: 0,
                      textAlign: 'left',
                      borderBottom: key === pages.length - 1 && '1px solid #fff',
                      marginBottom: key === pages.length - 1 && '10px',
                    }}
                  >
                    {page}
                  </Button>
                ))}
                <Tooltip title="Open currency">
                  <IconButton
                    onClick={handleOpenCurrencyMenu}
                    sx={{
                      p: 0,
                      alignItems: 'center',
                      mr: 3,
                    }}>
                    <img src={selectedCurrency.image} width={16} alt={selectedCurrency.name} />
                    <Typography textAlign="center" sx={{ color: "#fff", ml: 1, fontSize: 14 }}>{selectedCurrency.name}</Typography>
                    <KeyboardArrowDownIcon sx={{ color: '#fff' }} />
                  </IconButton>
                </Tooltip>
                <Box sx={{ paddingTop: '16px', borderTop: '1px solid #fff', marginTop: '10px' }}>
                  <Button variant="outlined"  sx={{ color: '#fff', borderColor: '#fff'}}>Sign Up</Button>
                  <Button
                    sx={{
                      backgroundColor: '#E9B109',
                      color: '#142241',
                      width: 87,
                      fontSize: 14,
                      fontWeight: 600,
                      ml: 3,
                      '&:hover': {
                        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)), #E9B109;',
                        color: '#142241',
                      }
                    }}
                  >Log In</Button>
                </Box>
              </Box>
            </Drawer>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 5,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={Logo} alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, key) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  mr: key !== pages.length - 1 && 4,
                  color: key === 0 ? '#E9B109' : 'white',
                  display: 'block',
                  textTransform: 'unset',
                  fontSize: 14,
                  fontWeight: 500,
                  position: 'relative',
                  '&:after': {
                    content: key === 0 && '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 8,
                    width: '20px',
                    height: '2px',
                    backgroundColor: '#E9B109',
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex' }}>
            <Tooltip title="Open currency">
              <IconButton
                onClick={handleOpenCurrencyMenu}
                sx={{
                  p: 0,
                  alignItems: 'center',
                  mr: 3,
                  display: { xs: 'none', sm: 'flex' } }}>
                <img src={selectedCurrency.image} width={16} alt={selectedCurrency.name} />
                <Typography textAlign="center" sx={{ color: "#fff", ml: 1, fontSize: 14 }}>{selectedCurrency.name}</Typography>
                <KeyboardArrowDownIcon sx={{ color: '#fff' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: { sm: '45px' },
                '& > .MuiMenu-paper': {
                  backgroundColor: '#142340',
                  color: '#fff',
                  minWidth: '105px',
                },
                '@media all and (max-width: 576px)': {
                  '& > .MuiMenu-paper': {
                    width: '100%',
                    marginTop: '35px',
                    left:' 0 !important',
                    boxShadow: 'none',
                  },
                }
              }}
              id="menu-appbar"
              anchorEl={anchorElCurrency}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={isCurrencyMenuOpen}
              onClose={handleCloseCurrencyMenu}
            >
              {currency.map((cur) => (
                <MenuItem key={cur} onClick={() => handleSelectCurrency(cur)}>
                  <img src={cur.image} width={16} alt={cur.name} />
                  <Typography sx={{ ml: 1, fontSize: 14 }}>{cur.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Box>
              <Link href="#" underline="none" sx={{ color: '#fff', display: { xs: 'none', sm: 'inline' }}}>Sign Up</Link>
              <Button
                sx={{
                  backgroundColor: '#E9B109',
                  color: '#142241',
                  width: 87,
                  fontSize: 14,
                  fontWeight: 600,
                  ml: 3,
                  '&:hover': {
                    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)), #E9B109;',
                    color: '#142241',
                  }
                }}
              >Log In</Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;