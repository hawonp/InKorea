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
import { Pagination } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function AppCatalog() {
  const [apps, setApps] = useState([]);
  const [maxPage, setMaxPage] = useState(10); // pagination state (default of one page)
  const [page, setPage] = useState(1);
  const [platform, setPlatform] = useState("All"); // state for filtering the posts

  // action handling for updating the page (order, filtering)
  const handleChange = (event, value) => {
    setPage(value);
  };

  // const [value, setValue] = useState("All");

  const handleFilter = (event) => {
    // setValue(event.target.value);
    setPlatform(event.target.value);
  };

  useEffect(() => {
    axiosInstance
      .get(APPS + "/test", {
        params: {
          page: page,
          platform: platform,
        },
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        setApps(data["apps"]); // setMaxPage(JSON.parse(response.data)["maxPageCount"]);
        setMaxPage(data["maxPageCount"]);
        console.log("app data");
      })
      .catch((e) => {
        console.log(e);
      });
  }, [page, platform]);

  return (
    <Box>
      <CssBaseline />
      <MainAppBar />
      <Typography
        style={{
          textAlign: "center",
          paddingBottom: "16px",
          paddingTop: "16px",
        }}
        variant="h4"
      >
        Usefull Apps in Korea
      </Typography>
      <FormControl
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "16px",
        }}
      >
        <FormLabel id="demo-controlled-radio-buttons-group">
          Platforms:
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={platform}
          onChange={handleFilter}
          row
        >
          <FormControlLabel value="All" control={<Radio />} label="All" />
          <FormControlLabel value="Google" control={<Radio />} label="Google" />
          <FormControlLabel value="Apple" control={<Radio />} label="Apple" />
        </RadioGroup>
      </FormControl>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "16px",
        }}
      >
        <Grid container spacing={2} maxWidth={"md"}>
          {apps.map((app) => (
            <Grid item xs={12} md={6} lg={6} key={app["app_id"]}>
              <AppBox app_id={app["app_id"]} />
            </Grid>
          ))}
        </Grid>
      </div>
      <Pagination
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "16px",
        }}
        variant="outlined"
        count={maxPage}
        page={page}
        onChange={handleChange}
      />
    </Box>
  );
}
