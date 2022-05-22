import MainAppBar from "../../components/MainAppBar/MainAppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import AppBox from "../../components/AppCatalog/AppBox";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import React, { useEffect, useState } from "react";

import axiosInstance from "../../utils/routeUtils";
import { APPS } from "../../utils/routeConstants";
import { Typography } from "@mui/material";

export default function AppCatalog() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(APPS + "/test", {
        params: {
          page: 1,
          platform: "All",
        },
      })
      .then((response) => {
        const data = response.data;
        setApps(data);
        console.log("app data");
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Box>
      <CssBaseline />
      <MainAppBar />
      <Typography
        style={{ textAlign: "center", paddingBottom: "16px" }}
        variant="h2"
      >
        App Catalog
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2} maxWidth={"md"}>
          {apps.map((app) => (
            <Grid item xs={12} md={6}>
              <AppBox app_id={app["app_id"]} key={app["app_id"]} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
}
