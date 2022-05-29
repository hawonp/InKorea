import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import { Chip } from "@mui/material";
import { Typography } from "@mui/material";
export default function Tag({ data }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div
    // style={{
    //   padding: "2px 6px",
    //   fontSize: "13px",
    //   color: "#3F8CB8",
    //   background: "#E1ECF4",
    //   borderRadius: "4px",
    //   marginRight: "4px",
    //   marginBottom: "2px",
    // }}
    >
      {/* <Typography
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "start",
          cursor: "pointer",
        }}
        onClick={handleClickOpen}
      >
        {keyword.keyword_text}
      </Typography> */}
      <Chip
        color="primary"
        variant="outlined"
        size="small"
        label={data.tag_title}
        onClick={handleClick}
        aria-describedby={id}
      />
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
        <Typography sx={{ p: 1 }}>
          Try searching for "{data.tag_title}" in the search bar!
        </Typography>
      </Popover>
    </div>
  );
}
