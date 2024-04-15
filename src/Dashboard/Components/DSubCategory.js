import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import EditSubCategory from './EditableCompo/EditSubCategory';

const drawerWidth = 240;

const DSubCategory = () => {
  const links = [
    { path: '/dashboard', text: 'Dashboard', icon: <InboxIcon /> },
    { path: '/dashboardcustomers', text: 'Customer', icon: <MailIcon /> },
    { path: '/dashboardproduct', text: 'Product', icon: <InboxIcon /> },
    { path: '/dashboardorder', text: 'Order', icon: <MailIcon /> },
    { path: '/dashboardcategory', text: 'Category', icon: <InboxIcon /> },
    { path: '/dashboardsubcategory', text: 'Subcategory', icon: <MailIcon /> },
    { path: '/dashboardshipment', text: 'Shipment', icon: <LocalShippingIcon /> },
    { path: '/dashboardtransactions', text: 'Transactions', icon: <MonetizationOnIcon /> },
    { path: '/dashboardsettings', text: 'Settings', icon: <SettingsIcon /> },
    { path: '/admin', text: 'Logout', icon: <ExitToAppIcon /> },  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Startup Idea
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {links.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <Link to={item.path} style={{ textDecoration: 'none' }}>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* Additional list items can be added here */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        <EditSubCategory/>
      </Box>
    </Box>
  );
};

export default DSubCategory;
