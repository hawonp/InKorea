import React, { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

import axiosInstance from "../../utils/routeUtils";
import { PHRASES, SLASH, KEYWORDS } from "../../utils/routeConstants";

export default function Keyword({ keyword_id }) {
  const [keyword, setKeyword] = useState([]);
  const [keywordID, setKeywordID] = useState(-1);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (keywordID != keyword_id) {
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
      <Typography
        style={{
          color: "blue",
          textDecorationLine: "underline",
          cursor: "pointer",
        }}
        onClick={handleClickOpen}
      >
        {keyword.keyword_text}
      </Typography>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {keyword.keyword_text}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {keyword.keyword_text_kor}
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
