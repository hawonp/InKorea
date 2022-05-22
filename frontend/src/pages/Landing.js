import React, { useEffect, useState } from "react";
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
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Landing() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box>
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
          <Card sx={{ minWidth: 275, maxWidth: 600 }}>
            <CardMedia
              component="img"
              height="194"
              image={guideImage}
              alt="Scenario"
            />
          </Card>
        </Item>
        <Item elevation={0}>
          <Card sx={{ minWidth: 275, maxWidth: 600 }}>
            <CardMedia
              component="img"
              height="194"
              src={appsImage}
              alt="App catalog"
            />
          </Card>
        </Item>
        {/* <Item>
          <Card>
            <div style={{ position: "relative" }}>
              <CardMedia
                style={{ height: "250px", paddingTop: "2%" }}
                component="img"
                src={appsImage}
                title="Pancakes"
                alt="Pancakes"
              />
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  top: 10,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                {" "}
                Some text
              </div>
            </div>
          </Card>
        </Item> */}
      </Grid>
    </Box>
  );
}
