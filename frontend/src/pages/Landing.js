import React, { useEffect, useState } from "react";
import { Box, Card, CardActions } from "@mui/material";

import Grid from "@mui/material/Grid";
import { CardMedia, Typography, Divider, CardContent } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import guideImage from "../assets/images/guide.jpg";
import appsImage from "../assets/images/apps.jpg";
import MainAppBar from "../components/MainAppBar/MainAppBar";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import { Stack } from "@mui/material";
import { Link } from "@mui/material";
import { Link as Reroute } from "react-router-dom";
import Profile1 from "../assets/images/hawon_profile.jpg";
import Profile2 from "../assets/images/joseph_profile.jpg";
import Profile3 from "../assets/images/sangwoo_profile.jpg";
import Profile4 from "../assets/images/youngwon_profile.jpg";

export default function Landing() {
  // const [checked, setChecked] = useState(false);

  const [guide, setGuide] = useState(false);
  const [app, setApp] = useState(false);

  const seeGuideWord = (e) => {
    setGuide(true);
  };
  const seeAppWord = (e) => {
    setApp(true);
  };
  const hideGuideWord = (e) => {
    setGuide(false);
  };
  const hideAppWord = (e) => {
    setApp(false);
  };

  return (
    <Box display="flex" flexDirection="column">
      <MainAppBar />
      <Box
        p={{ xs: 1, sm: 2, md: 0 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <div>
          <Box sx={{ mt: 5 }}>
            <Typography
              align="center"
              color="text.primary"
              style={{ fontSize: "calc(20px + 2vw)" }}
            >
              Welcome to InKorea
            </Typography>
          </Box>

          <Typography
            variant="h6"
            align="center"
            maxWidth="md"
            border="none"
            color="text.primary"
            style={{ padding: 10 }}
          >
            We aim to lower the language barrier for foreigners living in Korea
          </Typography>
          <Grid container maxWidth={"md"} spacing={1}>
            <Grid item xs={12} md={6}>
              <Reroute to="/guide" style={{ textDecoration: "none" }}>
                <Card sx={{ minWidth: 275, maxWidth: 600 }}>
                  <div
                    className="guide"
                    style={{ position: "relative" }}
                    onMouseOver={seeGuideWord}
                    onMouseLeave={hideGuideWord}
                  >
                    {guide ? (
                      <Card
                        id="guide"
                        style={{
                          height: 194,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "50px",
                        }}
                      >
                        Scenarios
                      </Card>
                    ) : (
                      <Card>
                        <CardMedia
                          component="img"
                          height="194"
                          src={guideImage}
                          alt="Guide"
                        />
                      </Card>
                    )}
                  </div>
                </Card>
              </Reroute>
            </Grid>
            <Grid item xs={12} md={6}>
              <Reroute to="/appcatalog" style={{ textDecoration: "none" }}>
                <Card sx={{ minWidth: 275, maxWidth: 600 }}>
                  <div
                    style={{ position: "relative" }}
                    onMouseOver={seeAppWord}
                    onMouseLeave={hideAppWord}
                  >
                    {app ? (
                      <Card
                        style={{
                          height: 194,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "50px",
                        }}
                      >
                        Apps
                      </Card>
                    ) : (
                      <Card>
                        <CardMedia
                          component="img"
                          height="194"
                          src={appsImage}
                          alt="App catalog"
                          style={{ objectFit: "fill" }}
                        />
                      </Card>
                    )}
                  </div>
                </Card>
              </Reroute>
            </Grid>
          </Grid>
        </div>
      </Box>

      <Divider
        id="aboutPage"
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          width: "80%",
          alignSelf: "center",
          fontSize: "20px",
          color: "text.primary",
        }}
      >
        About InKorea
      </Divider>

      <Box
        maxWidth="md"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignSelf: "center",
          border: "none",
        }}
      >
        <Card
          style={{
            border: "none",
            boxShadow: "none",
          }}
        >
          <Typography variant="h5" maxWidth="md" color="text.primary">
            Overview of the Problem
          </Typography>
          <Typography
            paragraph
            maxWidth="md"
            style={{ border: "none", color: "text.secondary" }}
          >
            Adjusting to a new life in a foreign country is difficult for
            anyone. It is especially difficult in Korea, one of the most
            homogenous countries in the world. InKorea was built to help
            foreigners who are struggling to adjust to Korea due to the language
            barrier. InKorea's features are designed in such a way so that you
            can absorb the Korean language with ease.
          </Typography>
        </Card>
        <Card
          style={{
            width: "100%",
            border: "none",
            boxShadow: "none",
          }}
        >
          <Typography
            variant="h5"
            maxWidth="md"
            style={{ color: "text.primary" }}
          >
            InKorea's Goals
          </Typography>
          <Typography
            maxWidth="md"
            style={{ color: "text.secondary", paddingBottom: "4px" }}
          >
            InKorea aims to lower the language barrier for foreigners by
            providing these features:
          </Typography>

          <Stack direction="row" alignItems="center" gap={1}>
            <LockOpenOutlinedIcon color="primary" />
            <Typography variant="body1" color="text.primary">
              Check out a currated list of apps that are useful for life in
              Korea
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap={1}>
            <LockOpenOutlinedIcon color="primary" />
            <Typography variant="body1" color="text.primary">
              Go through common scenarios with their keywords, phrases, and
              accompanying documentation{" "}
            </Typography>
          </Stack>
        </Card>
        <Card
          style={{
            width: "100%",
            border: "none",
            boxShadow: "none",
          }}
        >
          <Typography
            variant="h5"
            maxWidth="md"
            style={{ color: "text.primary" }}
          >
            InKorea's Progress
          </Typography>
          <Typography style={{ paddingBottom: "4px" }}>
            You can view InKorea's journey starting from the formative research
            all the way to the final product
          </Typography>

          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1s7Up6HgntsC1-azmKG8Ywk4nBaQsTabO/view?usp=sharing"
            rel="noreferrer"
            underline="none"
          >
            <Stack direction="row" alignItems="center" gap={1}>
              <ArticleIcon color="primary" />
              <Typography variant="body1" color="text.primary">
                Formative Research Report
              </Typography>
            </Stack>
          </Link>

          <Link
            target="_blank"
            href="https://www.youtube.com/watch?v=tCOShCInpdI"
            rel="noreferrer"
            underline="none"
          >
            <Stack direction="row" alignItems="center" gap={1}>
              <VideoFileIcon color="primary" />
              <Typography variant="body1" color="text.primary">
                Paper Prototype Video
              </Typography>
            </Stack>
          </Link>

          <Link
            target="_blank"
            href="https://drive.google.com/file/d/12tPuYooxdqs5Wwop5Q_gs5PSlvvQTc8F/view?usp=sharing"
            rel="noreferrer"
            underline="none"
          >
            <Stack direction="row" alignItems="center" gap={1}>
              <ArticleIcon color="primary" />
              <Typography variant="body1" color="text.primary">
                Mid-fidelity Prototype Report
              </Typography>
            </Stack>
          </Link>

          <Link
            target="_blank"
            href="https://youtu.be/iiQtPJ_cXsg"
            rel="noreferrer"
            underline="none"
          >
            <Stack direction="row" alignItems="center" gap={1}>
              <VideoFileIcon color="primary" />
              <Typography variant="body1" color="text.primary">
                Mid-fidelity Prototype Video
              </Typography>
            </Stack>
          </Link>

          <Link
            target="_blank"
            href="http://www.google.com"
            rel="noreferrer"
            underline="none"
          >
            <Stack direction="row" alignItems="center" gap={1}>
              <VideoFileIcon color="primary" />
              <Typography variant="body1" color="text.primary">
                Final presentation video
              </Typography>
            </Stack>
          </Link>
        </Card>
      </Box>

      <Divider
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          width: "80%",
          alignSelf: "center",
          fontSize: "20px",
          color: "text.primary",
        }}
      >
        Team Members
      </Divider>

      <Box display="flex" justifyContent="center" alignItems="center" pb="20px">
        <Grid container maxWidth={"md"} spacing={1}>
          <Grid item xs={12} sm={12} md={3}>
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // width: "190px",
              }}
            >
              <CardMedia
                component="img"
                src={Profile1}
                alt="Profile"
                style={{
                  height: 170,
                  width: 170,
                  borderRadius: "50%",
                  margin: "auto",
                  paddingTop: "16px",
                }}
              />
              <CardContent
                style={{
                  padding: "0px",
                  paddingTop: "8px",
                  paddingBottom: "4px",
                }}
              >
                <Typography
                  style={{
                    color: "text.primary",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Hawon Park
                </Typography>
                <Typography
                  style={{
                    color: "gray",
                    fontSize: "small",
                    textAlign: "center",
                  }}
                >
                  Hawon is a Senior in Computer Science who enjoys playing games
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  display: "flex",
                  justifyContent: "center",
                  borderWidth: 0,
                  borderTopWidth: 1,

                  borderColor: "gray",
                  borderStyle: "solid",
                  padding: "0px",
                  paddingTop: "4px",
                  paddingBottom: "8px",
                }}
              >
                <IconButton
                  size="small"
                  href="https://github.com/hawonp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{ "&:hover": { color: "secondary.main" } }}
                >
                  <GitHubIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  size="small"
                  href="https://www.linkedin.com/in/hawonpark/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{ "&:hover": { color: "secondary.main" } }}
                >
                  <LinkedInIcon fontSize="inherit" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // width: "190px",
              }}
            >
              <CardMedia
                component="img"
                src={Profile2}
                alt="Profile"
                style={{
                  height: 170,
                  width: 170,
                  borderRadius: "50%",
                  margin: "auto",
                  paddingTop: "16px",
                }}
              />
              <CardContent
                style={{
                  padding: "0px",
                  paddingTop: "8px",
                  paddingBottom: "4px",
                }}
              >
                <Typography
                  style={{
                    color: "text.primary",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Jeong Ho Shin
                </Typography>
                <Typography
                  style={{
                    color: "gray",
                    fontSize: "small",
                    textAlign: "center",
                  }}
                >
                  Jeong Ho is a Senior in Computer Science who enjoys playing
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  display: "flex",
                  justifyContent: "center",
                  borderWidth: 0,
                  borderTopWidth: 1,

                  borderColor: "gray",
                  borderStyle: "solid",
                  padding: "0px",
                  paddingTop: "4px",
                  paddingBottom: "8px",
                }}
              >
                <IconButton
                  size="small"
                  href="https://github.com/je0shin"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{ "&:hover": { color: "secondary.main" } }}
                >
                  <GitHubIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  size="small"
                  href="https://www.linkedin.com/in/jeongho-shin-771a1717b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{ "&:hover": { color: "secondary.main" } }}
                >
                  <LinkedInIcon fontSize="inherit" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // width: "190px",
              }}
            >
              <CardMedia
                component="img"
                src={Profile3}
                alt="Profile"
                style={{
                  height: 170,
                  width: 170,
                  borderRadius: "50%",
                  margin: "auto",
                  paddingTop: "16px",
                }}
              />
              <CardContent
                style={{
                  padding: "0px",
                  paddingTop: "8px",
                  paddingBottom: "4px",
                }}
              >
                <Typography
                  style={{
                    color: "text.primary",
                    textAlign: "center",
                  }}
                >
                  Sangwoo Park
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  display: "flex",
                  justifyContent: "center",
                  borderWidth: 0,
                  borderTopWidth: 1,

                  borderColor: "gray",
                  borderStyle: "solid",
                  padding: "0px",
                  paddingTop: "4px",
                  paddingBottom: "8px",
                }}
              >
                <IconButton
                  size="small"
                  href="https://github.com/uprain1116"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{ "&:hover": { color: "secondary.main" } }}
                >
                  <GitHubIcon fontSize="inherit" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // width: "190px",
              }}
            >
              <CardMedia
                component="img"
                src={Profile4}
                alt="Profile"
                style={{
                  height: 170,
                  width: 170,
                  borderRadius: "50%",
                  margin: "auto",
                  paddingTop: "16px",
                }}
              />
              <CardContent
                style={{
                  padding: "0px",
                  paddingTop: "8px",
                  paddingBottom: "4px",
                }}
              >
                <Typography
                  style={{
                    color: "text.primary",
                    textAlign: "center",
                  }}
                >
                  Youngwon Choi
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  display: "flex",
                  justifyContent: "center",
                  borderWidth: 0,
                  borderTopWidth: 1,

                  borderColor: "gray",
                  borderStyle: "solid",
                  padding: "0px",
                  paddingTop: "4px",
                  paddingBottom: "8px",
                }}
              >
                <IconButton
                  size="small"
                  href="https://github.com/youngecko1"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{ "&:hover": { color: "secondary.main" } }}
                >
                  <GitHubIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  size="small"
                  href="https://www.linkedin.com/in/youngwonchoi97/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{ "&:hover": { color: "secondary.main" } }}
                >
                  <LinkedInIcon fontSize="inherit" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
