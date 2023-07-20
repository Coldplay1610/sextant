import { Box, Stack } from "@mui/material";
import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

const App = () => {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Feed/>
      </Stack>
    </Box>
  );
};

export default App;
