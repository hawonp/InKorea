import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Keyword from "./Keyword";
import { PHRASES, SLASH } from "../../../utils/routeConstants";
import axiosInstance from "../../../utils/routeUtils";
import { Button } from "@mui/material";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

// HashTagWrapper styling
const HashtagWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        padding: "2px 6px",
        fontSize: "13px",
        color: "#3F8CB8",
        background: "#E1ECF4",
        borderRadius: "4px",
        marginRight: "4px",
        marginBottom: "2px",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// TagWrapper styling
const TagWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "start",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

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
      variant="outlined"
      display="flex"
      style={{ alignItems: "center", flexDirection: "column" }}
    >
      {flipped ? (
        <CardActionArea onClick={changeFlipped}>
          <CardContent>
            <Typography
              variant="h5"
              margin="auto"
              style={{ textAlign: "center" }}
            >
              {phrase.phrase_text}
            </Typography>
          </CardContent>
        </CardActionArea>
      ) : (
        <div>
          <CardActionArea onClick={changeFlipped}>
            <CardContent>
              <Typography variant="h5" style={{ textAlign: "center" }}>
                {phrase.phrase_text_kor}
              </Typography>
              <Typography
                color="text.secondary"
                style={{ textAlign: "center" }}
              >
                {phrase.phrase_romanization}
              </Typography>
            </CardContent>
          </CardActionArea>
          {phrase.keywords != 0 ? (
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
