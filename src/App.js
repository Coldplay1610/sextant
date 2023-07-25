import { Box, Stack } from "@mui/material";
import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

const App = () => {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" style={{display: "flex",minHeight: "calc(100vh - 64px)"}} spacing={2} justifyContent="space-between">
        <Sidebar style={{ position: "sticky", top: 0 }} />
        <Feed/>
      </Stack>
    </Box>
  );
};

export default App;
