import React from "react";
import { Typography } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/system";

const MyThemeComponent = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    // p: "100px",
  },
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
export default function ScenarioInfo() {
  return (
    <MyThemeComponent>
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
    </MyThemeComponent>
  );
}
