import React, { useState } from 'react';
import { Typography } from '@mui/material';
import WebSocket from 'react-websocket';

const LatencyInfo = () => {
  const [latency, setLatency] = useState(null);

  const handleMessage = (data) => {
    const packetTimestamp = parseInt(data);
    const currentTimestamp = Date.now();
    const packetLatency = currentTimestamp - packetTimestamp;
    setLatency(packetLatency);
  };

  return (
    <>
      {latency !== null ? (
        <Typography variant="body1">Packet Latency: {latency} ms</Typography>
      ) : (
        <Typography variant="body1">Waiting for packet...</Typography>
      )}
      <WebSocket
        url="ws://localhost:55455"
        onMessage={handleMessage}
        reconnect={true}
      />
    </>
  );
};

export default LatencyInfo;
