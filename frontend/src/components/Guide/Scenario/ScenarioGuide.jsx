import React, { useState } from "react";
import { PHRASES } from "../../../utils/routeConstants";
import axiosInstance from "../../../utils/routeUtils";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Flashcard from "./Flashcard";

export default function ScenarioGuide({ description, id }) {
  const [subcategoryID, setSubcategoryID] = useState(-1);
  const [phraseIDs, setPhraseIDs] = useState([]);

  if (subcategoryID !== id) {
    axiosInstance
      .get(PHRASES, {
        params: {
          subcategory_id: id,
        },
      })
      .then((response) => {
        const data = response.data;
        var temp_data = [];
        for (let i = 0; i < data.length; i++) {
          temp_data.push(data[i]["phrase_id"]);
        }
        setSubcategoryID(id);
        setPhraseIDs(temp_data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <Typography
        variant="h6"
        style={{
          textAlign: "left",
          paddingBottom: "16px",
        }}
      >
        Commonly Used Phrases
      </Typography>
      <Typography
        style={{
          textAlign: "left",
          paddingBottom: "16px",
        }}
      >
        {description}
      </Typography>
      <Grid container spacing={2}>
        {phraseIDs.map((phraseID) => (
          <Grid item key={phraseID} xs={12} md={6}>
            <Flashcard id={phraseID} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
