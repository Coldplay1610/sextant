import styled from '@emotion/styled';
import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

const StyledToolbar= styled(Toolbar)({
    display: 'flex',
    justifyContent: "space-between"
});

const Navbar = () => {
    return (
        <AppBar sx={{backgroundColor: "#33006F"}} position="sticky">
            <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>Sextant</Typography>
            <HomeRepairServiceIcon sx={{display:{sm:"none",xs:"block"}}}/>
            </StyledToolbar>
            
        </AppBar>
    )
}

export default Navbar;