import React, { useState } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import IconButton from "@mui/material/IconButton";
import { Stack, Typography } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Tooltip } from "@mui/material";

export default function PlatformInfo({ data }) {
  // const title = {data.platform_title}
  const [title, setTitle] = useState("");
  const [store, setStore] = useState("");
  const [QRCode, setQRCode] = useState("");
  const [english, setEnglish] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    // console.log("open dialog");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (data !== undefined && title === "") {
    setTitle(data.platform_title);
    setStore(data.platform_store_link);
    setQRCode(data.platform_qr_code);
    setEnglish(data.has_english);
  }

  return (
    <div>
      {title === "Apple" ? (
        <Tooltip title="Check App Store" arrow>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={handleClickOpen}
            color="primary"
            sx={{ "&:hover": { color: "secondary.main" } }}
          >
            <AppleIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Check Play Store" arrow>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={handleClickOpen}
            color="primary"
            sx={{ "&:hover": { color: "secondary.main" } }}
          >
            <GoogleIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          style={{ paddingBottom: "0px", textAlign: "center" }}
          id="alert-dialog-title"
          color="text.primary"
        >
          {title}
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
