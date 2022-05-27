import React, { useState } from "react";
import axiosInstance from "../../utils/routeUtils";
import { APPS, SLASH, DETAILS } from "../../utils/routeConstants";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import IconButton from "@mui/material/IconButton";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import { Stack, Typography } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Link from "@mui/icons-material/Link";
export default function PlatformInfo({ data }) {
  // const title = {data.platform_title}
  const [title, setTitle] = useState("");
  const [store, setStore] = useState("");
  const [QRCode, setQRCode] = useState("");
  const [english, setEnglish] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    console.log("open dialog");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (data != undefined && title === "") {
    setTitle(data.platform_title);
    setStore(data.platform_store_link);
    setQRCode(data.platform_qr_code);
    setEnglish(data.has_english);
  }

  return (
    <div>
      {title === "Apple" ? (
        <IconButton
          aria-label="delete"
          size="small"
          onClick={handleClickOpen}
          sx={{ "&:hover": { color: "black" } }}
        >
          <AppleIcon fontSize="small" />
        </IconButton>
      ) : (
        <IconButton
          aria-label="delete"
          size="small"
          onClick={handleClickOpen}
          sx={{ "&:hover": { color: "black" } }}
        >
          <GoogleIcon fontSize="small" />
        </IconButton>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{ paddingBottom: "0px" }} id="alert-dialog-title">
          <Typography style={{ textAlign: "center" }}>{title}</Typography>
        </DialogTitle>
        <DialogContent style={{ paddingBottom: "0px" }}>
          {/* <Link href={store}>Link</Link> */}
          <Stack>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {english === true ? (
                <Typography
                  style={{
                    fontSize: "small",
                    textAlign: "center",
                    paddingBottom: "8px",
                  }}
                  color="text.secondary"
                >
                  This app supports English{" "}
                </Typography>
              ) : (
                <Typography
                  style={{
                    fontSize: "small",
                    textAlign: "center",
                    paddingBottom: "8px",
                  }}
                  color="text.secondary"
                >
                  This app does not support English
                </Typography>
              )}
              <img
                src={QRCode}
                alt="error"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/150";
                }}
                loading="lazy"
              />
            </div>
            <div style={{ paddingTop: "8px" }}>
              <a href={store} target="_blank" rel="noreferrer noopener">
                <Typography
                  style={{
                    fontSize: "small",
                    textAlign: "center",
                    paddingBottom: "8px",
                  }}
                >
                  Download
                </Typography>
              </a>
            </div>
          </Stack>
        </DialogContent>
        <DialogActions style={{ paddingTop: "0px" }}>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    // <IconButton aria-label="delete" size="small">
    //   <SubtitlesIcon fontSize="small" />
    // </IconButton>
  );
}
