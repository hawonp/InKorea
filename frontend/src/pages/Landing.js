import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Card } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CardMedia, Typography, Divider, CardContent } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  useTheme,
} from "@mui/material/styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import AttachmentRoundedIcon from '@mui/icons-material/AttachmentRounded';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import guideImage from "../assets/images/guide.jpg";
import appsImage from "../assets/images/apps.jpg";
import MainAppBar from "../components/MainAppBar/MainAppBar";
import { experimentalStyled as styled } from "@mui/material/styles";
import { maxWidth, style, textAlign } from "@mui/system";

import Profile1 from "../assets/images/hawon_profile.jpg"
import Profile2 from "../assets/images/joseph_profile.jpg"
import Profile3 from "../assets/images/sangwoo_profile.jpg"
import Profile4 from "../assets/images/youngwon_profile.jpg"

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

  const [guide, setGuide] = useState(false);
  const [app, setApp] = useState(false);

  const seeGuideWord = (e) => { setGuide(true); }
  const seeAppWord = (e) => { setApp(true); }
  const hideGuideWord = (e) => { setGuide(false); }
  const hideAppWord = (e) => { setApp(false); }

  

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box display="flex" flexDirection="column">
      <MainAppBar/>
      <Box style={{height:"100vh"}}>
      <Box sx={{ mt: 5 }}>
        <ThemeProvider theme={theme}>
          <Zoom
            in={checked}
            timeout={600}
            style={{ transitionDelay: checked ? "500ms" : "100ms" }}
          >
            <Typography align="center" color = "text.primary" style={{fontSize: "8vw"}}>
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
        {/* <Typography variant="h6" align="center" maxWidth="md" border = "none" color = "text.primary">
          InKorea is a website that aims to lower the language barriers for
          foreigners in Korea. We provide guides for processes such as creating
          a bank account and a catalog of useful applications for one to live in
          Korea.
        </Typography> */}
        <Typography variant="h6" align="center" maxWidth="md" border = "none" color = "text.primary" style={{padding: 10}} >
          A website that aims to lower the language barriers for
          foreigners in Korea
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
          <Link to="/guide" style={{textDecoration: "none"}}>
            <Card sx={{ minWidth: 275, maxWidth: 600}}>
              <div className="guide" style={{ position: "relative"}} onMouseOver = {seeGuideWord} onMouseLeave = {hideGuideWord}>
                {
                  guide ? 
                  <Card id = "guide" style={{height: 194, display: "flex", justifyContent: "center", alignItems: "center", fontSize: "50px"}}>
                    Guide
                  </Card>
                  :
                  <Card>
                    <CardMedia
                    component="img"
                    height="194"
                    src={guideImage}
                    alt="Guide"
                  />
                  </Card>

                }
              </div>
            </Card>
          </Link>
        </Item>
        <Item elevation={0}>
          <Link to="/appcatalog" style={{textDecoration: "none"}}>
            <Card sx={{ minWidth: 275, maxWidth: 600 }}>
              <div style={{ position: "relative" }} onMouseOver = {seeAppWord} onMouseLeave = {hideAppWord}>
                {
                  app ? 
                  <Card style={{height: 194, display: "flex", justifyContent: "center", alignItems: "center", fontSize: "50px"}}>
                    App Catalog
                  </Card>
                  :
                  <Card>
                    <CardMedia
                      component="img"
                      height="194"
                      src={appsImage}
                      alt="App catalog"
                    />
                  </Card>
                }

                <div
                  style={{
                    position: "absolute",
                    color: "black",
                    top: "50%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    borderRadius: "10%",
                    fontSize: "20px",
                  }}
                >
                  {/* App catalog */}
                </div>
              </div>
            </Card>
          </Link>
        </Item>
      </Grid>
      </Box>

      <Divider style={{margin: "50px", width: "80%", alignSelf: "center", fontSize: "20px", color: "text.primary"}}>About InKorea</Divider>

      <Box maxWidth = "md" style= {{display: "flex", flexWrap: "wrap", justifyContent: "center", alignSelf: "center", border: "none"}}>
        <Card style={{border: "none", boxShadow: "none", marginBottom: 30, padding: 10}}>
          <Typography variant="h5" maxWidth="md" color = "text.primary">Overview of the Problem</Typography>
          <Typography paragraph maxWidth="md" style={{border: "none", color: "text.secondary"}}>
          Adjusting to a new life in a foreign country is difficult for anyone. It is especially difficult in
          Korea, one of the most homogenous countries in the world. Therefore, InKorea aims toward foreigners living in
          Korea who may be faced with many challenges on a regular basis. 
          By providing learning on different situations and recommending convenient information, 
          InKorea hopes to lower the level of difficulties living in Korea. 
          </Typography>
        </Card>
      </Box>
      <Box maxWidth = "md" style= {{display: "flex", flexWrap: "wrap", justifyContent: "center", alignSelf: "center", border: "none"}}>
        <Card style={{width: "100%", minWidth: "350px", border: "none", boxShadow: "none", marginBottom: 30, padding: 10}}>
          <Typography variant="h5" maxWidth= "md" style = {{color: "text.primary"}}>Our Goals</Typography>
          <Typography maxWidth= "md" style = {{color: "text.secondary"}}>InKorea aims to lower the language barrier and help foreigners adapt quickly to life in Korea.</Typography>
          <Typography maxWidth= "md" style = {{color: "text.secondary"}}><LockOpenOutlinedIcon style={{transform: "translateY(20%)"}}/>Lower the language boundaries for different scenarios</Typography>
          <Typography maxWidth= "md" style = {{color: "text.secondary"}}><LockOpenOutlinedIcon style={{transform: "translateY(20%)"}}/>Help learn keywords used in Korea through quizes</Typography>
          <Typography maxWidth= "md" style = {{color: "text.secondary"}}><LockOpenOutlinedIcon style={{transform: "translateY(20%)"}}/>Provide information on required documents</Typography>
          <Typography maxWidth= "md" style = {{color: "text.secondary"}}><LockOpenOutlinedIcon style={{transform: "translateY(20%)"}}/>Recommand Apps for better convenience in Korea </Typography>
        </Card>
        <Card style={{width: "100%", minWidth: "350px", border: "none", boxShadow: "none", padding: 10}}>
          <Typography variant="h5" maxWidth= "md" style = {{color: "text.primary"}}>Making Process</Typography>
          <Typography maxWidth= "md" border = "none">From conducting research, we've come to InKorea.</Typography>

            <Typography maxWidth= "md">
            <a href = "https://drive.google.com/file/d/1s7Up6HgntsC1-azmKG8Ywk4nBaQsTabO/view?usp=sharing" 
              target={"_blank"} style={{textDecoration: "none", color: "#2F3E46"}} > 
              <AttachmentRoundedIcon style={{transform: "translateY(30%)"}}/> Formative research report </a>
          </Typography>
          <Typography maxWidth= "md">
            <a href = "https://www.youtube.com/watch?v=tCOShCInpdI" 
              target={"_blank"} style={{textDecoration: "none", color: "#2F3E46"}} > 
              <AttachmentRoundedIcon style={{transform: "translateY(30%)"}}/> Paper prototype video </a>
          </Typography>
          <Typography maxWidth= "md">
            <a href = "https://drive.google.com/file/d/12tPuYooxdqs5Wwop5Q_gs5PSlvvQTc8F/view?usp=sharing" 
              target={"_blank"} style={{textDecoration: "none", color: "#2F3E46"}} > 
              <AttachmentRoundedIcon style={{transform: "translateY(30%)"}}/> Mid-fidelity prototype report </a>
          </Typography>

          <Typography maxWidth= "md">
            <a href = "https://youtu.be/iiQtPJ_cXsg" 
              target={"_blank"} style={{textDecoration: "none", color: "#2F3E46"}} > 
              <AttachmentRoundedIcon style={{transform: "translateY(30%)"}}/> Mid-fidelity prototype video </a>
          </Typography>

          <Typography maxWidth= "md">
            <a href = "#" 
              target={"_blank"} style={{textDecoration: "none", color: "#2F3E46"}} > 
              <AttachmentRoundedIcon style={{transform: "translateY(30%)"}}/> Final presentation video (yet have link) </a>
          </Typography>

        </Card>
      </Box>
      
      <Divider style={{marginTop: "40px", marginBottom: "20px", width: "80%", alignSelf: "center", fontSize: "20px", color: "text.primary"}}>Team Members</Divider>

      <Grid style={{ display: "flex", justifyContent: "center", alignSelf: "center", alignItems: "baseline", marginBottom: 30, maxWidth: "60%", border: "none"}} container columns={{ xs: 4, sm: 8, md: 10 }}>
        <Item>
          <a href='https://github.com/hawonp' target={"_blank"} style={{textDecoration: "none"}}>
          <Card style={{hegith: 190, width: 190}}>
            <CardMedia
              component="img"
              src={Profile1}
              alt="Profile"
              style={{ height: 170, width: 170, borderRadius: '50%', marginBottom: '20px', margin: "auto", marginTop: "20px"}}
            />
            <Typography style={{marginTop: "20px", marginBottom: "20px", color: "text.secondary"}}>Hawon Park</Typography>  
              {/* <GitHubIcon style={{color: "black"}}/> */}
          </Card>
          </a>
        </Item>

        <Item>
          <a href='https://github.com/je0shin' target={"_blank"} style={{textDecoration: "none"}}>
          <Card style={{hegith: 190, width: 190}}>
            <CardMedia
              component="img"
              src={Profile2}
              alt="Profile"
              style={{ height: 170, width: 170, borderRadius: '50%', marginBottom: '20px', margin: "auto", marginTop: "20px"}}
            />
            <Typography style={{marginTop: "20px", marginBottom: "20px", color: "text.secondary"}}>Jeong Ho Shin</Typography>                
              {/* <GitHubIcon style={{color: "black"}}/> */}

          </Card>
          </a>
        </Item>

        <Item>
          <a href='https://github.com/uprain1116' target={"_blank"} style={{textDecoration: "none"}}>
          <Card style={{hegith: 190, width: 190}}>
            <CardMedia
              component="img"
              src={Profile3}
              alt="Profile"
              style={{ height: 170, width: 170, borderRadius: '50%', marginBottom: '20px', margin: "auto", marginTop: "20px"}}
            />
            <Typography style={{marginTop: "20px", marginBottom: "20px", color: "text.secondary"}}>Sangwoo Park</Typography>
              {/* <GitHubIcon style={{color: "black"}}/> */}
          </Card>
          </a>
        </Item>

        <Item>
          <a href='https://github.com/youngecko1' target={"_blank"} style={{textDecoration: "none"}}>
          <Card style={{hegith: 190, width: 190}}>
            <CardMedia
              component="img"
              src={Profile4}
              alt="Profile"
              style={{ height: 170, width: 170, borderRadius: '50%', marginBottom: '20px', margin: "auto", marginTop: "20px"}}
            />
            <Typography style={{marginTop: "20px", marginBottom: "20px", color: "text.secondary"}}>Youngwon Choi</Typography>
            {/* <GitHubIcon style={{color: "black"}}/> */}

          </Card>
          </a>
        </Item>
      </Grid>
    </Box>
  );
}
