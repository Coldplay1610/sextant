import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

const IPInfo = ({ version }) => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get(
          version === 'ipv6'
            ? 'https://api64.ipify.org?format=json'
            : 'https://api.ipify.org?format=json'
        );
        setIpAddress(response.data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIpAddress();
  }, [version]);

  return (
    <Typography variant="body1">
      {version === 'ipv6' ? 'IPv6 Address: ' : 'IPv4 Address: '}
      {ipAddress}
    </Typography>
  );
};

export default IPInfo;
