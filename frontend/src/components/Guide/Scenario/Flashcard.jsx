import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Keyword from "./Keyword";
import { PHRASES, SLASH } from "../../../utils/routeConstants";
import axiosInstance from "../../../utils/routeUtils";

export default function Flashcard({ id }) {
  const [phrase, setPhrase] = useState([]);
  const [phraseID, setPhraseID] = useState(-1);

  if (phraseID !== id) {
    axiosInstance.get(PHRASES + SLASH + id).then((response) => {
      const data = response.data;
      setPhrase(data[0]);
      setPhraseID(id);
    });
  }

  const [flipped, setFlipped] = useState(true);

  function changeFlipped() {
    setFlipped(!flipped);
  }

  return (
    <Card
      // variant="outlined"
      style={{
        height: "120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {flipped ? (
        <CardActionArea style={{ height: "100%" }} onClick={changeFlipped}>
          <CardContent>
            <Typography
              margin="auto"
              style={{ fontWeight: 500, textAlign: "left" }}
            >
              {phrase.phrase_text}
            </Typography>
          </CardContent>
        </CardActionArea>
      ) : (
        <div>
          <CardActionArea onClick={changeFlipped}>
            <CardContent>
              <Typography style={{ fontWeight: 500, textAlign: "left" }}>
                {phrase.phrase_text_kor}
              </Typography>
              <Typography
                color="text.secondary"
                style={{ textAlign: "left", fontSize: "small" }}
              >
                {phrase.phrase_romanization}
              </Typography>
            </CardContent>
          </CardActionArea>
          {phrase.keywords !== 0 ? (
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
              {phrase.keywords.map((keyword) => (
                <Keyword
                  key={keyword["keyword_id"]}
                  keyword_id={keyword["keyword_id"]}
                />
              ))}
            </CardActions>
          ) : (
            <div />
          )}
        </div>
      )}
    </Card>
  );
}
