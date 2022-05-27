import React, { useState } from "react";

import { Chip } from "@mui/material";

export default function Tag({ data }) {
  const temp = () => {
    console.log("open dialog");
  };

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
        onClick={temp}
      />
    </div>
  );
}
