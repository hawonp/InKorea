import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
export default function ScenarioInfo() {
  return (
    // <Box
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <div>
    //     <Typography style={{ textAlign: "center" }} variant="h1" color="gray">
    //       Please select a scenario!
    //     </Typography>
    //   </div>
    // </Box>
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Typography style={{ textAlign: "center" }} variant="h2" color="gray">
        Hello!
      </Typography>
      <Typography style={{ textAlign: "left" }} color="gray">
        Welcome to InKorea's scenario guide!
      </Typography>
      <Typography style={{ textAlign: "left" }} color="gray">
        Please use the side bar on the left to select a scenario that you want
        to learn more about!
      </Typography>
    </div>
  );
}
