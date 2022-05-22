import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";

import MainAppBar from "../../components/MainAppBar/MainAppBar";
// eslint-disable-next-line
import Searchbar from "../../components/Sidebar/Searchbar";
import SidebarAccordion from "../../components/Sidebar/SidebarAccordion";
import Documents from "../../components/Guide/Documents";
import { CATEGORIES } from "../../utils/routeConstants";
import axiosInstance from "../../utils/routeUtils";
import ScenarioGuide from "../../components/Guide/Scenario/ScenarioGuide";
import Quiz from "../../components/Guide/Quiz";
const drawerWidth = 240;

export default function Guide(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [options, setOptions] = useState([
  //   {
  //     categoryName: "Banking",
  //     subCategories: [
  //       "Getting a bank account",
  //       "Withdrawing money from an ATM",
  //     ],
  //   },
  //   {
  //     categoryName: "Phone",
  //     subCategories: ["subcat 11", "subcat 12"],
  //   },
  // ]);

  const [options, setOptions] = useState([]);
  const [subCategoryId, setSubcategoryId] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");

  useEffect(() => {
    axiosInstance
      .get(CATEGORIES)
      .then((response) => {
        if (response["status"] === 200) {
          var json_data = response["data"];

          var categories = [];

          for (var i = 0; i < json_data.length; i++) {
            var obj = json_data[i];
            var temp_dict = {};
            temp_dict["categoryName"] = obj["category_name"];
            temp_dict["categoryID"] = obj["category_id"];
            temp_dict["subCategories"] = obj["subcategories"];
            categories.push(temp_dict);
          }

          setOptions(categories);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // eslint-disable-next-line
  function handleSearch(text) {
    setOptions((prev) => [
      ...prev,
      {
        cateogryName: text,
        subCateogries: ["subcat 1", "subcat 2"],
      },
    ]);
  }

  function handleSubcatSelect(subcat_dict) {
    console.log("clicked on subcategory_id:", subcat_dict);
    setSubcategoryId(subcat_dict[0]);
    setSubCategoryName(subcat_dict[1]);
  }

  const drawer = (
    <div>
      <Toolbar />
      {/* <Searchbar searchHandler={handleSearch} /> */}
      <SidebarAccordion
        options={options}
        handleSubcatSelect={handleSubcatSelect}
      />
    </div>
  );

  // mobile version of getting data
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box alignItems="center" justifyContent="center" sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <MainAppBar />
      </AppBar>

      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          maxWidth: "md",
        }}
      >
        <Toolbar />
        {/* Drawer trigger button that appears only when its mobile mode */}
        <Button
          variant="outlined"
          edge="start"
          onClick={() => {
            handleDrawerToggle();
          }}
          fullWidth
          sx={{ display: { sm: "none" }, borderColor: "gray", color: "gray" }}
        >
          Select category
        </Button>

        {subCategoryName ? (
          <div>
            <h1 style={{ textAlign: "center" }}> {subCategoryName}</h1>
            <Documents id={subCategoryId} />
            <hr />
            <ScenarioGuide id={subCategoryId} />
            <Quiz />
          </div>
        ) : (
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <h1 style={{ textAlign: "center" }}> Please select a scenario!</h1> */}
            {/* <Error_400_page /> */}
            <div>
              <Typography
                style={{ textAlign: "center" }}
                variant="h1"
                color="gray"
              >
                Please select a scenario!
              </Typography>
            </div>
          </Box>
        )}
      </Box>
    </Box>
  );
}
