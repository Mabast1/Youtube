import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      {/* <img src={logo} alt="logo" height={45} /> */}
      <Typography variant="h4" style={{ color: "#634abe", fontWeight: "bold" }}>
        STEAM
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
