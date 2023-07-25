import React from 'react'
import IPInfo from './IPInfo';
import { Container, Paper, Typography } from '@mui/material';

function Ipv6() {
  return (
    <Container maxWidth="sm" sx={{ mt: 2 }}>
    <Paper sx={{ p: 2,bgcolor: "#E6E6FA"  }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Your Public IPv6 Address
      </Typography>
      <IPInfo version="ipv6" />
    </Paper>
  </Container>
  )
}

export default Ipv6;