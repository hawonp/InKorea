import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Grid } from "@mui/material";

import { PHRASES, SLASH } from "../../utils/routeConstants";
import axiosInstance from "../../utils/routeUtils";
import KoreanSentance from "./KoreanSentance";

export default function ScenarioItem({ id }) {
  const [phrase, setPhrase] = useState([]);
  const [phraseID, setPhraseID] = useState(-1);

  if (phraseID !== id) {
    axiosInstance.get(PHRASES + SLASH + id).then((response) => {
      const data = response.data;
      setPhrase(data[0]);
      setPhraseID(id);
    });
  }

  return (
    <Card>
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
            <Typography style={{ textAlign: "right" }}>English: </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography style={{ textAlign: "left" }}>
              {phrase.phrase_text}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography style={{ textAlign: "right" }}>Korean: </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography style={{ textAlign: "left" }}>
              {phrase.phrase_text_kor}
              {/* <KoreanSentance
                input={[phrase.phrase_text_kor, phrase.keywords]}
              /> */}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography style={{ textAlign: "right" }}>Sound: </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography color="text.secondary" style={{ textAlign: "left" }}>
              {phrase.phrase_romanization}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
