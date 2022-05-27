import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import {QUIZ, INFO, SLASH} from "../../utils/routeConstants";
import axiosInstance from "../../utils/routeUtils";

const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
};

var quiz;
var data;

export default function Quiz() {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Handlers
  const handleClose = () => {
    setOpen(false);
  };

  function handleQuizFabQuiz(id, title) {
    setOpen(true);
    axiosInstance
      .get(QUIZ)
      .then((response) => {
        const data = response.data;
        setDocumentDetails({ documentTitle: title, documentDetails: data });
        console.log(data.length)
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function setDocumentDetails(title, data){
    quiz=title;
    this.data=data;
  }

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab variant="extended" style={style} onClick={()=> handleQuizFabQuiz()}>
        Take a Quiz!
      </Fab>
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="docdetails-dialog-title"
        >
          <DialogTitle id="docdetails-dialog-title">{quiz}</DialogTitle>
          <DialogContent>{data}</DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Box>
  );
}
