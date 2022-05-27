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

export default function Quiz({id}) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(-1);
  const [quiz, setQuiz] = useState([]);
  const [quizDetails, setQuizDetails] = useState({
    quizTitle: "",
    quizDetails: "",
  });
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
      .get(QUIZ + id)
      .then((response) => {
        const data = response.data;
        setQuizDetails({ quizTitle: title, quizDetails: data[0] });
        console.log(data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab variant="extended" style={style} onClick={()=> handleQuizFabQuiz("?subcategory_id=1")}>
        Take a Quiz!
      </Fab>
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="docdetails-dialog-title"
        >
          <DialogTitle id="docdetails-dialog-title">Title</DialogTitle>
          <DialogContent>{quizDetails.quizDetails["question_text"]}


          </DialogContent>
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
