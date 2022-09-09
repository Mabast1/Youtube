import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography sx={{ color: "white" }} variant="h4" fontWeight="bold" mb={2}>
        Search results for:{" "}
        <span style={{ color: "#634abe" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} direction="row" />
    </Box>
  );
};

export default SearchFeed;
