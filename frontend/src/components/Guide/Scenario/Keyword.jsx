import React, { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Chip, Typography } from "@mui/material";
import axiosInstance from "../../../utils/routeUtils";
import { PHRASES, SLASH, KEYWORDS } from "../../../utils/routeConstants";

export default function Keyword({ keyword_id }) {
  const [keyword, setKeyword] = useState([]);
  const [keywordID, setKeywordID] = useState(-1);
  const [isHover, setIsHover] = useState(true);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    console.log("open dialog");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleHover = () => {
    setIsHover(!isHover);
    if (isHover) {
      const temp = keyword.keyword_text;

      setText(temp);
    } else {
      const temp = keyword.keyword_text_kor;
      setText(temp);
    }
  };

  if (keywordID !== keyword_id) {
    console.log("getting information for keyword", keyword_id);
    axiosInstance
      .get(PHRASES + KEYWORDS + SLASH + keyword_id)
      .then((response) => {
        const data = response.data;
        console.log("get keyword information", data);
        setKeyword(data[0]);
        setKeywordID(keyword_id);
      });
  }

  return (
    <div>
      <Chip
        color="primary"
        onClick={handleClickOpen}
        variant="outlined"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        label={text != "" ? text : keyword.keyword_text_kor}
      />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {keyword.keyword_text_kor}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography> {keyword.keyword_explanation}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
