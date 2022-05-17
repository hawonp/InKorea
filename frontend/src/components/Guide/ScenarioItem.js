import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { SCENARIO, SLASH } from "../../utils/routeConstants";
import axiosInstance from "../../utils/routeUtils";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ScenarioItem({ id }) {
  const [phrase, setPhrase] = useState([]);
  const [phraseID, setPhraseID] = useState(-1);

  if (phraseID != id) {
    console.log("getting information for phrase_id", id);
    axiosInstance.get(SCENARIO + SLASH + id).then((response) => {
      const data = response.data;
      console.log("get phrase information", data);
      setPhrase(data[0]);
      setPhraseID(id);
    });
  }

  if (!phrase) {
    return <div>hello world</div>;
  }

  return (
    <Card sx={{ minWidth: 50 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          {phrase.phrase_text}
        </Typography>
        <Typography variant="body2">{phrase.phrase_text_kor}</Typography>
        <Typography variant="body2" color="text.secondary">
          {phrase.phrase_romanization}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
