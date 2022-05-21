import React, { useState } from "react";
import { Typography } from "@mui/material";

export default function KoreanSentance({ input }) {
  const [keywords, setKeywords] = useState([]);

  if (keywords != input[1]) {
    console.log("keywords", input);
  }

  return <Typography> {input[0]}</Typography>;
}
