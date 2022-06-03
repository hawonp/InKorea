import React from "react";
import { Typography } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/system";

// const MyThemeComponent = styled("div")(({ theme }) => ({
//   [theme.breakpoints.up("sm")]: {
//     p: "100px",
//   },
//   [theme.breakpoints.up("md")]: {
//     zIndex: "modal",
//     transform: "translate(0%, 100%)",
//   },
// }));
export default function ScenarioInfo() {
  return (
    <div
      style={{
        // position: "absolute",
        transform: "translate( 0%, 50%)",
      }}
    >
      <Typography
        style={{ textAlign: "center" }}
        variant="h2"
        color="text.primary"
      >
        Hello!
      </Typography>
      <Typography style={{ textAlign: "center" }} color="text.primary">
        Welcome to InKorea's scenario guide!
      </Typography>
      <Typography style={{ textAlign: "center" }} color="text.primary">
        Please use the side bar on the left to select a scenario that you want
        to learn more about!
      </Typography>
    </div>
  );
}
