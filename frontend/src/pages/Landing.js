import React, { useEffect, useState, useRef } from "react";
import { Box, Button, Card, CardActions } from "@mui/material";

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
import { Avatar } from "@mui/material";
import Profile1 from "../assets/images/hawon_profile.jpg";
import Profile2 from "../assets/images/joseph_profile.jpg";
import Profile3 from "../assets/images/sangwoo_profile.jpg";
import Profile4 from "../assets/images/youngwon_profile.jpg";
import Logo from "../assets/images/logo.png";

export default function Landing() {
  const myRef = useRef(null);

  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Box display="flex" flexDirection="column">
      <MainAppBar />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          sx={{ height: "100vh" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          maxWidth="md"
          p={{ xs: 1, sm: 2, md: 0 }}
        >
          <img src={Logo} alt="cur" />

          <div style={{ paddingBottom: "16px" }}>
            <Typography
              variant={{ md: "h5", sm: "h6" }}
              align="left"
              color="text.secondary"
            >
              We aim to lower the language barrier for foreigners living in
              Korea
            </Typography>
          </div>
          <Stack direction="row" spacing={1}>
            <Reroute to="/guide" style={{ textDecoration: "none" }}>
              <Button variant="outlined">
                <Typography variant={{ md: "h5", sm: "body1" }}>
                  See Scenarios
                </Typography>
              </Button>
            </Reroute>
            <Reroute to="/appcatalog" style={{ textDecoration: "none" }}>
              <Button variant="outlined">
                <Typography variant={{ md: "h5", sm: "body1" }}>
                  See Apps
                </Typography>
              </Button>
            </Reroute>

            <Divider orientation="vertical" flexItem />
            <Button variant="contained" onClick={executeScroll}>
              <Typography variant={{ md: "h5", sm: "body1" }}>
                See More
              </Typography>
            </Button>
          </Stack>
        </Box>
      </Box>

      <Divider
        ref={myRef}
        id="aboutPage"
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          width: "50%",
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
        p={{ xs: 1, sm: 2, md: 0 }}
      >
        <Card
          style={{
            border: "none",
            boxShadow: "none",
            paddingBottom: "20px",
          }}
        >
          <Typography variant="h5" maxWidth="md" color="text.primary">
            Overview of the Problem
          </Typography>
          <Typography
            paragraph
            maxWidth="md"
            style={{
              border: "none",
              color: "text.secondary",
              margin: "0px",
            }}
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
            paddingBottom: "20px",
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

          <Stack direction="row" alignItems="center" gap={1}>
            <ArticleIcon color="primary" />
            <Typography>
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1s7Up6HgntsC1-azmKG8Ywk4nBaQsTabO/view?usp=sharing"
                rel="noreferrer"
                color="text.primary"
              >
                Formative Research Report
              </Link>
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap={1}>
            <VideoFileIcon color="primary" />
            <Typography>
              <Link
                target="_blank"
                href="https://www.youtube.com/watch?v=tCOShCInpdI"
                rel="noreferrer"
                color="text.primary"
              >
                Paper Prototype Video
              </Link>
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap={1}>
            <ArticleIcon color="primary" />
            <Typography>
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/12tPuYooxdqs5Wwop5Q_gs5PSlvvQTc8F/view?usp=sharing"
                rel="noreferrer"
                color="text.primary"
              >
                Mid-fidelity Prototype Report
              </Link>
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap={1}>
            <VideoFileIcon color="primary" />
            <Typography>
              <Link
                target="_blank"
                href="https://youtu.be/iiQtPJ_cXsg"
                rel="noreferrer"
                color="text.primary"
              >
                Mid-fidelity Prototype Video
              </Link>
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap={1}>
            <VideoFileIcon color="primary" />
            <Typography>
              <Link
                target="_blank"
                href="https://www.youtube.com/watch?v=_2K-L0V_ow4"
                rel="noreferrer"
                color="text.primary"
              >
                Final Presentation Video{" "}
              </Link>
            </Typography>
          </Stack>
        </Card>
      </Box>

      <Divider
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          width: "50%",
          alignSelf: "center",
          fontSize: "20px",
          color: "text.primary",
        }}
      >
        Team Members
      </Divider>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        pb={"20px"}
        paddingLeft={{ xs: 1, sm: 2, md: 0 }}
        paddingRight={{ xs: 1, sm: 2, md: 0 }}
      >
        <Grid container maxWidth={"md"} spacing={1}>
          <Grid item xs={12} sm={12} md={3}>
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <CardMedia
                component="img"
                src={Profile1}
                alt="Profile"
                style={{
                  height: 190,
                }}
              />
              <CardContent>
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
                    textAlign: "left",
                  }}
                >
                  Hawon is a Senior in CSE who enjoys playing games and solving
                  LeetCode
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
              }}
            >
              <CardMedia
                component="img"
                src={Profile2}
                alt="Profile"
                style={{
                  height: 190,
                }}
              />
              <CardContent>
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
                    textAlign: "left",
                  }}
                >
                  Jeong Ho is a Senior in CSE who enjoys raiding in LostArk and
                  eating mint chocolate
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
              }}
            >
              <CardMedia
                component="img"
                src={Profile3}
                alt="Profile"
                style={{
                  height: 190,
                }}
              />
              <CardContent>
                <Typography
                  style={{
                    color: "text.primary",
                    textAlign: "center",
                    fontWeight: "bold",
                    margin: "0px",
                  }}
                >
                  Sangwoo Park
                </Typography>
                <Typography
                  style={{
                    color: "gray",
                    fontSize: "small",
                    textAlign: "left",
                  }}
                >
                  Sangwoo is a Junior in CSE who enjoys traveling and watching
                  movies
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
              }}
            >
              <CardMedia
                component="img"
                src={Profile4}
                alt="Profile"
                style={{
                  height: 190,
                }}
              />
              <CardContent>
                <Typography
                  style={{
                    color: "text.primary",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Youngwon Choi
                </Typography>
                <Typography
                  style={{
                    color: "gray",
                    fontSize: "small",
                    textAlign: "left",
                  }}
                >
                  Youngwon is a Senior in TSM who likes to create music and eat
                  good food
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
