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

const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
};

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
    // axiosInstance
    //   .get(DOCUMENTS + SLASH + id + INFO)
    //   .then((response) => {
    //     const data = response.data;
    //     setDocumentDetails({ documentTitle: title, documentDetails: data });
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab
        disabled="true"
        variant="extended"
        size="medium"
        color="primary"
        aria-label="add"
        style={style}
        onClick={() => handleQuizFabQuiz()}
      >
        Take a quiz!
      </Fab>
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="docdetails-dialog-title"
        >
          <DialogTitle id="docdetails-dialog-title">qwer</DialogTitle>
          <DialogContent>asdf</DialogContent>
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
