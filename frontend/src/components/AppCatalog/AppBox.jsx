import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import axiosInstance from "../../utils/routeUtils";
import { APPS, SLASH, INFO } from "../../utils/routeConstants";
import Tag from "./Tag";
import { Stack } from "@mui/material";
import { CardActions } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AppInfo from "./AppInfo";
import PlatformInfo from "./PlatformInfo";

export default function AppBox({ app_id }) {
  const [app, setApp] = useState([]);
  const [appID, setAppID] = useState(-1);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    console.log("open dialog");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = useState(false);

  const handleClickOpen2 = () => {
    console.log("open dialog");
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  if (appID != app_id) {
    axiosInstance.get(APPS + SLASH + app_id).then((response) => {
      const data = response.data;
      setApp(data[0]);
      console.log("app data", data[0]);
      setAppID(app_id);
    });
  }

  return (
    <Card variant="outlined" sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{
          maxWidth: "132px",
          maxHeight: "132px",
          borderRight: 1,
          borderWidth: 0.1,
          borderColor: "gray",
        }}
        image={app.app_image}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <CardContent
          style={{ flex: "1 0 auto", paddingBottom: "8px", paddingTop: "8px" }}
        >
          <Typography style={{ fontWeight: 500, fontSize: "medium" }}>
            {app.app_title}
          </Typography>
          <Typography
            color="text.secondary"
            style={{ paddingBottom: "8px", fontSize: "small" }}
          >
            {app.app_title_kor}
          </Typography>
          {app.tags != 0 && app.tags != undefined ? (
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
              {app.tags.map((tag) => (
                <Tag data={tag} key={tag["tag_id"]} />
              ))}
            </Stack>
          ) : (
            <div />
          )}
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "center",
            borderWidth: 0,
            borderTopWidth: 1,
            borderColor: "gray",
            borderStyle: "solid",
            paddingTop: "0",
          }}
        >
          {app["app_id"] === 1 ? (
            <div>
              <Button size="small" onClick={handleClickOpen}>
                See More
              </Button>
            </div>
          ) : (
            <div>
              <Button size="small" disabled onClick={handleClickOpen}>
                See More
              </Button>
            </div>
          )}
        </CardActions>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{app.app_title}</DialogTitle>
        <DialogContent>
          <AppInfo id={appID} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{app.app_title}</DialogTitle>
        <DialogContent>
          <PlatformInfo data={app.platforms} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
