import { Container, Paper, Typography } from '@mui/material';
import React from 'react'
import IPInfo from './IPInfo';

function Ipv4() {
  return (
    <Container  maxWidth="sm" sx={{ mt: 2}}>
      <Paper sx={{ p: 2,bgcolor: "#E6E6FA"  }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Your Public IPv4 Address
        </Typography>
        <IPInfo version="ipv4" />
      </Paper>
    </Container>
  )
}

export default Ipv4;