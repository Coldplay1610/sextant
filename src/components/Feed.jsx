
import { Box } from '@mui/material';
import React from 'react';
import Ipv4 from './Ipv4';
import Ipv6 from './Ipv6';


const Feed = () => {
    
  return (
    <Box flex={8} display="flex" p={2}>
      <Ipv4/>
      <Ipv6/>
        </Box>
  )
}

export default Feed;