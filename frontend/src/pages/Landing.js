import React from "react";
import { Typography } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import MainAppBar from "../components/MainAppBar/MainAppBar";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Landing() {
  theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  return (
    <div>
      <MainAppBar />
      <div>
        <ThemeProvider theme={theme}>
          <Typography variant="h2">Welcome to InKorea</Typography>
        </ThemeProvider>
      </div>
    </div>
  );
}
