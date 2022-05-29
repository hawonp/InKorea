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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import AttachmentRoundedIcon from "@mui/icons-material/AttachmentRounded";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import Collapse from "@mui/material/Collapse";
import guideImage from "../assets/images/guide.jpg";
import appsImage from "../assets/images/apps.jpg";
import MainAppBar from "../components/MainAppBar/MainAppBar";
import { experimentalStyled as styled } from "@mui/material/styles";
import { maxWidth, style } from "@mui/system";

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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Landing() {
  const [checked, setChecked] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  const handleExpandClick = (event) => {
    switch (event.target.id) {
      case "1":
        setExpanded1(!expanded1);
        break;
      case "2":
        setExpanded2(!expanded2);
        break;
      case "3":
        setExpanded3(!expanded3);
        break;
      case "4":
        setExpanded4(!expanded4);
        break;
      default:
        break;
    }
  };

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
            timeout={600}
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
        <Typography variant="h6" align="center" maxWidth="md" border = "none">
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
                    top: "45%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "rgba(0,0,0, 0.5)",
                    borderRadius: "10%",
                    fontSize: "20px",
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
                    top: "45%",
                    left: "53%",
                    transform: "translateX(-50%)",
                    backgroundColor: "rgba(0,0,0, 0.5)",
                    borderRadius: "10%",
                    fontSize: "20px",
                  }}
                >
                  App catalog
                </div>
              </div>
            </Card>
          </Link>
        </Item>
      </Grid>

      <Divider style={{ margin: "50px", width: "80%", alignSelf: "center" }} />

      <Box maxWidth = "md" style= {{display: "flex", flexWrap: "wrap", justifyContent: "center", alignSelf: "center", border: "none"}}>
        <Card style={{border: "none", boxShadow: "none", marginBottom: 30, padding: 10}}>
          <Typography variant="h5" maxWidth="md">About InKorea</Typography>
          <Typography paragraph maxWidth="md" style={{border: "none"}}>
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
          <Typography variant="h5" maxWidth= "md">Our Goals</Typography>
          <Typography maxWidth= "md">InKorea aims to lower the language barrier and help foreigners adapt quickly to life in Korea.</Typography>
          <Typography maxWidth= "md"><LockOpenOutlinedIcon style={{transform: "translateY(20%)"}}/>Lower the language boundaries for different scenarios</Typography>
          <Typography maxWidth= "md"><LockOpenOutlinedIcon style={{transform: "translateY(20%)"}}/>Help learn keywords used in Korea through quizes</Typography>
          <Typography maxWidth= "md"><LockOpenOutlinedIcon style={{transform: "translateY(20%)"}}/>Provide information on required documents</Typography>
          <Typography maxWidth= "md"><LockOpenOutlinedIcon style={{transform: "translateY(20%)"}}/>Recommand Apps for better convenience in Korea </Typography>
        </Card>
        <Card style={{width: "100%", minWidth: "350px", border: "none", boxShadow: "none", padding: 10}}>
          <Typography variant="h5" maxWidth= "md">Making Process</Typography>
          <Typography maxWidth= "md" border = "none">From conducting research, we've come to InKorea.</Typography>

            <Typography maxWidth= "md">
            <a href = "https://drive.google.com/file/d/1s7Up6HgntsC1-azmKG8Ywk4nBaQsTabO/view?usp=sharing" 
              target={"_blank"} style={{textDecoration: "none", color: "inherit"}} > 
              <AttachmentRoundedIcon style={{transform: "translateY(30%)"}}/> Formative research report </a>
          </Typography>
          <Typography maxWidth= "md">
            <a href = "https://www.youtube.com/watch?v=tCOShCInpdI" 
              target={"_blank"} style={{textDecoration: "none", color: "inherit"}} > 
              <AttachmentRoundedIcon style={{transform: "translateY(30%)"}}/> Paper prototype video </a>
          </Typography>
          <Typography maxWidth= "md">
            <a href = "https://drive.google.com/file/d/12tPuYooxdqs5Wwop5Q_gs5PSlvvQTc8F/view?usp=sharing" 
              target={"_blank"} style={{textDecoration: "none", color: "inherit"}} > 
              <AttachmentRoundedIcon style={{transform: "translateY(30%)"}}/> Mid-fidelity prototype report </a>
          </Typography>

          <Typography maxWidth= "md">
            <a href = "https://drive.google.com/file/d/1fLmNPc2x6GYFg2ScKJOJlJ4vb4lhB6WZ/view?usp=sharing" 
              target={"_blank"} style={{textDecoration: "none", color: "inherit"}} > 
              <AttachmentRoundedIcon style={{transform: "translateY(30%)"}}/> Mid-fidelity prototype video </a>
          </Typography>

          <Typography maxWidth= "md">
            <a href = "#" 
              target={"_blank"} style={{textDecoration: "none", color: "inherit"}} > 
              <AttachmentRoundedIcon style={{transform: "translateY(30%)"}}/> Final presentation video (yet have link) </a>
          </Typography>

        </Card>
      </Box>
      
      <Divider style={{marginTop: "40px", marginBottom: "20px", width: "80%", alignSelf: "center", fontSize: "20px"}}>Team Members</Divider>

      <Grid style={{ display: "flex", justifyContent: "center", alignSelf: "center", alignItems: "baseline", marginBottom: 30, maxWidth: "60%", border: "none"}} container columns={{ xs: 4, sm: 8, md: 10 }}>
        <Item>
          <Card style={{hegith: 190, width: 190}}>
            <CardMedia
              component="img"
              src={Profile1}
              alt="Profile"
              style={{ height: 170, width: 170, borderRadius: '50%', marginBottom: '20px', margin: "auto", marginTop: "20px"}}
            />
            <Typography style={{ marginTop: "20px" }}>Hawon Park</Typography>
            <ExpandMore
              expand={expanded1}
              onClick={handleExpandClick}
              aria-expanded={expanded1}
              aria-label="show more"
            >
              <ExpandMoreIcon id="1" />
            </ExpandMore>
            <Collapse
              in={expanded1}
              timeout="auto"
              unmountOnExit
              style={{ maxWidth: 200, margin: "auto" }}
            >
              <Typography paragraph style={{ textAlign: "center" }}>
                brief description about self
              </Typography>
                
              <a href='https://github.com/hawonp' target={"_blank"}><GitHubIcon style={{color: "black"}}/></a>
              {/* <a href='#' target={"_blank"}><LinkedInIcon style={{color: "black", marginRight: "5%"}}/></a>
              <a href='#' target={"_blank"}><FacebookIcon style={{color: "black", marginRight: "5%"}}/></a>
              <a href='#' target={"_blank"}><InstagramIcon style={{color: "black"}}/></a> */}
            </Collapse>
          </Card>
        </Item>

        <Item>
          <Card style={{hegith: 190, width: 190}}>
            <CardMedia
              component="img"
              src={Profile2}
              alt="Profile"
              style={{ height: 170, width: 170, borderRadius: '50%', marginBottom: '20px', margin: "auto", marginTop: "20px"}}
            />
            <Typography style={{ marginTop: "20px" }}>Jeong Ho Shin</Typography>
            <ExpandMore
              expand={expanded2}
              onClick={handleExpandClick}
              aria-expanded={expanded2}
              aria-label="show more"
            >
              <ExpandMoreIcon id="2" />
            </ExpandMore>
            <Collapse
              in={expanded2}
              timeout="auto"
              unmountOnExit
              style={{ maxWidth: 200, margin: "auto" }}
            >
              <Typography paragraph style={{ textAlign: "center" }}>
                brief description about self
              </Typography>
                
              <a href='https://github.com/je0shin' target={"_blank"}><GitHubIcon style={{color: "black"}}/></a>
              {/* <a href='#' target={"_blank"}><LinkedInIcon style={{color: "black", marginRight: "5%"}}/></a>
              <a href='#' target={"_blank"}><FacebookIcon style={{color: "black", marginRight: "5%"}}/></a>
              <a href='#' target={"_blank"}><InstagramIcon style={{color: "black"}}/></a> */}
            </Collapse>
          </Card>
        </Item>

        <Item>
          <Card style={{hegith: 190, width: 190}}>
            <CardMedia
              component="img"
              src={Profile3}
              alt="Profile"
              style={{ height: 170, width: 170, borderRadius: '50%', marginBottom: '20px', margin: "auto", marginTop: "20px"}}
            />
            <Typography style={{ marginTop: "20px" }}>Sangwoo Park</Typography>
            <ExpandMore
              expand={expanded3}
              onClick={handleExpandClick}
              aria-expanded={expanded3}
              aria-label="show more"
            >
              <ExpandMoreIcon id="3" />
            </ExpandMore>
            <Collapse
              in={expanded3}
              timeout="auto"
              unmountOnExit
              style={{ maxWidth: 200, margin: "auto" }}
            >
              <Typography paragraph style={{ textAlign: "center" }}>
                brief description about self
              </Typography>
                
              <a href='https://github.com/uprain1116' target={"_blank"}><GitHubIcon style={{color: "black"}}/></a>
              {/* <a href='#' target={"_blank"}><LinkedInIcon style={{color: "black", marginRight: "5%"}}/></a>
              <a href='#' target={"_blank"}><FacebookIcon style={{color: "black", marginRight: "5%"}}/></a>
              <a href='#' target={"_blank"}><InstagramIcon style={{color: "black"}}/></a> */}
            </Collapse>
          </Card>
        </Item>

        <Item>
          <Card style={{hegith: 190, width: 190}}>
            <CardMedia
              component="img"
              src={Profile4}
              alt="Profile"
              style={{ height: 170, width: 170, borderRadius: '50%', marginBottom: '20px', margin: "auto", marginTop: "20px"}}
            />
            <Typography style={{ marginTop: "20px" }}>Youngwon Choi</Typography>
            <ExpandMore
              expand={expanded4}
              onClick={handleExpandClick}
              aria-expanded={expanded4}
              aria-label="show more"
            >
              <ExpandMoreIcon id="4" />
            </ExpandMore>
            <Collapse
              in={expanded4}
              timeout="auto"
              unmountOnExit
              style={{ maxWidth: 200, margin: "auto" }}
            >
              <Typography paragraph style={{ textAlign: "center" }}>
                brief description about self
              </Typography>
                
              <a href='https://github.com/youngecko1' target={"_blank"}><GitHubIcon style={{color: "black"}}/></a>
              {/* <a href='#' target={"_blank"}><LinkedInIcon style={{color: "black", marginRight: "5%"}}/></a>
              <a href='#' target={"_blank"}><FacebookIcon style={{color: "black", marginRight: "5%"}}/></a>
              <a href='#' target={"_blank"}><InstagramIcon style={{color: "black"}}/></a> */}
            </Collapse>
          </Card>
        </Item>
      </Grid>
    </Box>
  );
}
