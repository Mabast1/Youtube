import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import Sidebar from "./Sidebar";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sm: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sm: 0, md: 2 },
        }}
      >
        <Sidebar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "gray" }}
        >
          Copyright 2022{" "}
          <a
            href="https://mabastahmad.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Mabast Ahmad
          </a>
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
