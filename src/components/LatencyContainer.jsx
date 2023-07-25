import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import LatencyInfo from './LatencyInfo';

const LatencyContainer = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 2 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Packet Latency Information
        </Typography>
        <LatencyInfo />
      </Paper>
    </Container>
  );
};

export default LatencyContainer;
