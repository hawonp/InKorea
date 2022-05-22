import React, { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import { Chip } from "@mui/material";
import axiosInstance from "../../../utils/routeUtils";
import { PHRASES, SLASH, KEYWORDS } from "../../../utils/routeConstants";

export default function Keyword({ keyword_id }) {
  const [keyword, setKeyword] = useState([]);
  const [keywordID, setKeywordID] = useState(-1);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    console.log("open dialog");
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
    <div
    // style={{
    //   padding: "2px 6px",
    //   fontSize: "13px",
    //   color: "#3F8CB8",
    //   background: "#E1ECF4",
    //   borderRadius: "4px",
    //   marginRight: "4px",
    //   marginBottom: "2px",
    // }}
    >
      {/* <Typography
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "start",
          cursor: "pointer",
        }}
        onClick={handleClickOpen}
      >
        {keyword.keyword_text}
      </Typography> */}
      <Chip
        color="primary"
        onClick={handleClickOpen}
        variant="outlined"
        label={keyword.keyword_text}
      />

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
