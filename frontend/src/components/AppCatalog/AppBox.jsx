import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import axiosInstance from "../../utils/routeUtils";
import { APPS, SLASH } from "../../utils/routeConstants";
import Tag from "./Tag";
import { CardActions } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AppInfo from "./AppInfo";
import PlatformInfo from "./PlatformInfo";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function AppBox({ app_id, parentCallback }) {
  const [app, setApp] = useState([]);
  const [appID, setAppID] = useState(-1);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleTagClick(value) {
    parentCallback(value.target.innerText);
  }

  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  if (appID !== app_id) {
    axiosInstance.get(APPS + SLASH + app_id).then((response) => {
      const data = response.data;
      setApp(data[0]);
      // console.log("app data", data[0]);
      setAppID(app_id);
    });
  }

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{
          maxWidth: "132px",
          maxHeight: "132px",
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
          style={{ flex: "1 0 auto", paddingBottom: "0px", paddingTop: "8px" }}
        >
          <Grid container spacing={0}>
            <Grid item xs={8}>
              <Typography style={{ fontWeight: 500, fontSize: "medium" }}>
                {app.app_title}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              {app.platforms !== 0 && app.platforms !== undefined ? (
                <Stack
                  direction="row"
                  spacing={0}
                  style={{ justifyContent: "right" }}
                >
                  {app.platforms.map((platform) => (
                    <PlatformInfo
                      data={platform}
                      key={platform["platform_store_link"]}
                    />
                  ))}
                </Stack>
              ) : (
                <div />
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography
                color="text.secondary"
                style={{ paddingBottom: "8px", fontSize: "small" }}
              >
                {app.app_title_kor}
              </Typography>
            </Grid>
          </Grid>

          {app.tags !== 0 && app.tags !== undefined ? (
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
              {app.tags.map((tag) => (
                <Tag data={tag} handler={handleTagClick} key={tag["tag_id"]} />
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
          }}
        >
          {/* {app["app_id"] === 1 ? (
            <div>
              <Button
                size="small"
                style={{ padding: "0px" }}
                onClick={handleClickOpen}
              >
                See More
              </Button>
            </div>
          ) : (
            <div>
              <Button
                size="small"
                style={{ padding: "0px" }}
                disabled
                onClick={handleClickOpen}
              >
                See More
              </Button>
            </div>
          )} */}
          <div>
            <Button
              size="small"
              style={{ padding: "0px" }}
              onClick={handleClickOpen}
            >
              See More
            </Button>
          </div>
        </CardActions>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullScreen={fullScreen}
      >
        <DialogTitle
          id="alert-dialog-title"
          color="text.primary"
          style={{ textAlign: "center" }}
        >
          {app.app_title}
        </DialogTitle>
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
