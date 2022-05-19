import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";

import axiosInstance from "../../utils/routeUtils";
import { PHRASES, SLASH, KEYWORDS } from "../../utils/routeConstants";
import Box from "@mui/material/Box";

import Popover from "@mui/material/Popover";

export default function Keyword({ keyword_id }) {
  const [keyword, setKeyword] = useState([]);
  const [keywordID, setKeywordID] = useState(-1);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  if (keywordID != keyword_id) {
    console.log("getting information for keyword", id);
    axiosInstance
      .get(PHRASES + KEYWORDS + SLASH + keyword_id)
      .then((response) => {
        const data = response.data;
        console.log("get keyword information", data);
        setKeyword(data[0]);
        setKeywordID(keyword_id);
      });
  }

  return (
    <div>
      <Typography
        style={{
          color: "blue",
          textDecorationLine: "underline",
          cursor: "pointer",
        }}
        aria-describedby={id}
        onClick={handleClick}
      >
        {keyword.keyword_text}
      </Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}
