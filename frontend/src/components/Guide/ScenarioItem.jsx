import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { PHRASES, SLASH } from "../../utils/routeConstants";
import axiosInstance from "../../utils/routeUtils";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { Grid, ListItem } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import AbcIcon from "@mui/icons-material/Abc";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { List, ListItemText, ListItemIcon } from "@mui/material";
import { red } from "@mui/material/colors";
import { CardHeader } from "@mui/material";
import Keyword from "./Keyword";
export default function ScenarioItem({ id }) {
  const [phrase, setPhrase] = useState([]);
  const [phraseID, setPhraseID] = useState(-1);

  const [expand, setExpand] = useState();

  if (phraseID !== id) {
    console.log("getting information for phrase_id", id);
    axiosInstance.get(PHRASES + SLASH + id).then((response) => {
      const data = response.data;
      console.log("get phrase information", data);
      setPhrase(data[0]);
      setPhraseID(id);
    });
  }

  // if (!phrase) {
  //   return <div>hello world</div>;
  // }

  return (
    <Card>
      {/* <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      /> */}

      {/* <CardHeader title = {phrase.phrase_id} /> */}
      <Typography style={{ textAlign: "center" }} color="text.secondary">
        Phrase {phrase.phrase_id}
      </Typography>
      <hr style={{ color: "#D3D3D3" }} />

      <CardContent
        style={{ paddingBottom: "0px", paddingTop: "8px", textAlign: "center" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography style={{ textAlign: "right" }}>English: </Typography>{" "}
          </Grid>
          <Grid item xs={10}>
            <Typography style={{ textAlign: "left" }}>
              {phrase.phrase_text}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography style={{ textAlign: "right" }}>Korean: </Typography>{" "}
          </Grid>
          <Grid item xs={10}>
            <Typography style={{ textAlign: "left" }}>
              {phrase.phrase_text_kor}
              <Keyword keyword_id={1} />
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography style={{ textAlign: "right" }}>Sound: </Typography>{" "}
          </Grid>
          <Grid item xs={10}>
            <Typography color="text.secondary" style={{ textAlign: "left" }}>
              {phrase.phrase_romanization}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        sx={{ paddingTop: "0px", paddingX: "16px", justifyContent: "center" }}
      >
        <IconButton
          onClick={() => setExpand(!expand)}
          sx={{
            padding: "1px",
            paddingRight: "6px",
            borderRadius: "4px",
          }}
        >
          <Typography variant="caption">See More</Typography>
          {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </CardActions>
      <Collapse in={expand}>
        <Typography>hello wordl</Typography>
      </Collapse>
    </Card>
  );
}
