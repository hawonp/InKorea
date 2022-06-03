import React, { useState } from "react";
import { Chip } from "@mui/material";
import { Tooltip } from "@mui/material";
import { Typography } from "@mui/material";
export default function Tag({ data, handler }) {
  const [label, setLabel] = useState("");

  if (data != undefined && data != 0 && label == "") {
    setLabel("Search for apps by: " + data.tag_title);
  }

  return (
    <div>
      <Tooltip title={label} arrow placement="top">
        <Chip
          color="primary"
          variant="outlined"
          size="small"
          label={data.tag_title}
          onClick={handler}
        />
      </Tooltip>
    </div>
  );
}
