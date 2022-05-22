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

  if (appID != app_id) {
    axiosInstance.get(APPS + SLASH + app_id).then((response) => {
      const data = response.data;
      setApp(data[0]);
      console.log("app data", data[0]);
      setAppID(app_id);
    });
  }

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia component="img" sx={{ maxWidth: 150 }} image={app.app_image} />
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="h5" style={{ paddingBottom: "16px" }}>
            {app.app_title}
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
          }}
        >
          {app["app_id"] === 1 ? (
            <Button onClick={handleClickOpen}>See More</Button>
          ) : (
            <Button disabled onClick={handleClickOpen}>
              See More
            </Button>
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
    </Card>
  );
}
