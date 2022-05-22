import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Card } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CardMedia, Typography } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  useTheme,
} from "@mui/material/styles";
import guideImage from "../assets/images/guide.jpg";
import appsImage from "../assets/images/apps.jpg";
import MainAppBar from "../components/MainAppBar/MainAppBar";
import { experimentalStyled as styled } from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  margin: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.grey[100],
    "& $addIcon": {
      color: "purple",
    },
  },
}));

export default function Landing() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box display="flex" flexDirection="column">
      <MainAppBar />
      <Box sx={{ mt: 10 }}>
        <ThemeProvider theme={theme}>
          <Zoom
            in={checked}
            timeout={700}
            style={{ transitionDelay: checked ? "500ms" : "100ms" }}
          >
            <Typography variant="h2" align="center">
              Welcome to InKorea
            </Typography>
          </Zoom>
        </ThemeProvider>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" align="center" maxWidth="md">
          InKorea is a website that aims to lower the language barriers for
          foreigners in Korea. We provide guides for processes such as creating
          a bank account and a catalog of useful applications for one to live in
          Korea.
        </Typography>
      </Box>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        container
        // spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Item elevation={0}>
          <Link to="/guide">
            <Card sx={{ minWidth: 275, maxWidth: 600 }}>
              <div style={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="194"
                  src={guideImage}
                  alt="App catalog"
                />
                <div
                  style={{
                    position: "absolute",
                    color: "white",
                    top: "50%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  Guides
                </div>
              </div>
            </Card>
          </Link>
        </Item>
        <Item elevation={0}>
          <Link to="/appcatalog">
            <Card sx={{ minWidth: 275, maxWidth: 600 }}>
              <div style={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="194"
                  src={appsImage}
                  alt="App catalog"
                />
                <div
                  style={{
                    position: "absolute",
                    color: "white",
                    top: "50%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  App catalog
                </div>
              </div>
            </Card>
          </Link>
        </Item>
      </Grid>
    </Box>
  );
}
