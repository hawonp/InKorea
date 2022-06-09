import MainAppBar from "../../components/MainAppBar/MainAppBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import AppBox from "../../components/AppCatalog/AppBox";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useEffect, useState } from "react";

import axiosInstance from "../../utils/routeUtils";
import { APPS_ROUTE, SEARCH } from "../../utils/routeConstants";
import { Typography } from "@mui/material";
import { Pagination } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Autocomplete } from "@mui/material";

export default function AppCatalog() {
  const [apps, setApps] = useState([]);
  const [maxPage, setMaxPage] = useState(10); // pagination state (default of one page)
  const [page, setPage] = useState(1);
  const [platform, setPlatform] = useState("All"); // state for filtering the posts

  const [searchResults, setSearchResults] = useState([]); // search results data state
  const [inputValue, setInputValue] = useState(""); // user keystroke input data state

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleFilter = (event) => {
    setPlatform(event.target.value);
  };

  // when the user has typed something in the search bar
  function handleInputChange(event, value) {
    // console.log("this is change in motion");
    if (value !== null && value !== "") {
      axiosInstance
        .get(APPS_ROUTE + SEARCH + "/test", {
          params: {
            search_input: value,
          },
        })
        .then((response) => {
          setSearchResults(response["data"]);
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] === 400) {
            // do nothing, error 400 would mean that nothing is in the search bar
          } else if (resp["status"] === 500) {
            // router.push("/" + "error/500");
          }
        });
    } else if (value == null) {
      setSearchResults([]);
    }
    setInputValue(value);
  }

  function handleClear(event, value) {
    setSearchResults([]);
  }

  const handleTagClick = (childData) => {
    setInputValue(childData);
    setPage(1);
  };

  useEffect(() => {
    if (inputValue !== undefined) {
      // console.log(
      //   "searching for apps with filters:",
      //   page,
      //   platform,
      //   inputValue
      // );
      axiosInstance
        .get(APPS_ROUTE + "/test", {
          params: {
            page: page,
            platform: platform,
            search: inputValue,
          },
        })
        .then((response) => {
          const data = response.data;
          // console.log("app data was received from backend", data);
          setApps(data["apps"]);
          setMaxPage(data["maxPageCount"]);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [page, platform, inputValue]);

  return (
    // <ThemeProvider theme={theme}>
    <div>
      <CssBaseline />
      <MainAppBar />
      <Box p={{ xs: 1, sm: 2, md: 0 }}>
        <Typography
          color="text.primary"
          style={{
            textAlign: "center",
            paddingBottom: "16px",
            paddingTop: "16px",
          }}
          variant="h4"
        >
          Usefull Apps in Korea
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "16px",
            flexDirection: "column",
          }}
        >
          <Grid container maxWidth={"md"}>
            <Grid item xs={12} md={4}>
              <FormControl
                style={{
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
                  <FormControlLabel
                    value="All"
                    control={<Radio />}
                    label="All"
                  />
                  <FormControlLabel
                    value="Google"
                    control={<Radio />}
                    label="Google"
                  />
                  <FormControlLabel
                    value="Apple"
                    control={<Radio />}
                    label="Apple"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={8}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={searchResults}
                sx={{ width: "auto", color: "text.primary" }}
                inputValue={inputValue}
                onInputChange={handleInputChange}
                onClose={handleClear}
                groupBy={(option) => option.type.toString()}
                getOptionLabel={(option) => option.text.toString()}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search by app names or tags"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                      style: { color: "text.primary" },
                    }}
                  />
                )}
              />
            </Grid>
          </Grid>

          {apps !== 0 && apps !== undefined ? (          
          <Grid container spacing={2} maxWidth={"md"}>
          {apps.map((app) => (
              <Grid item xs={12} md={6} lg={6} key={app["app_id"]}>
                <AppBox
                  app_id={app["app_id"]}
                  parentCallback={handleTagClick}
                />
              </Grid>
            ))}
          </Grid>) : (<Typography>Could not load apps</Typography>)}
        </div>
        <Pagination
          color="primary"
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
    </div>

    // </ThemeProvider>
  );
}
