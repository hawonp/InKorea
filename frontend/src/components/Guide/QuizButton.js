import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
};

export default function QuizButton() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab
        variant="extended"
        size="medium"
        color="primary"
        aria-label="add"
        style={style}
      >
        Take a quiz!
      </Fab>
    </Box>
  );
}
