import React, { useState } from "react";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";

import MainAppBar from "../../components/MainAppBar/MainAppBar";
import Searchbar from "../../components/Sidebar/Searchbar";
import SidebarAccordion from "../../components/Sidebar/SidebarAccordion";
import ConversationLeft from "../../components/Guide/ConversationLeft";
import ConversationRight from "../../components/Guide/ConversationRight";
import DocumentList from "../../components/Guide/DocumentList";
import { CATEGORIES } from "../../utils/routeConstants";
import axiosInstance from "../../utils/routeUtils";

const drawerWidth = 240;

export default function Guide(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [options, setOptions] = useState([
    {
      cateogryName: "Banking",
      subCateogries: [
        "Getting a bank account",
        "Withdrawing money from an ATM",
      ],
    },
    {
      cateogryName: "Phone",
      subCateogries: ["subcat 11", "subcat 12"],
    },
  ]);

  function handleSearch(text) {
    setOptions((prev) => [
      ...prev,
      {
        cateogryName: text,
        subCateogries: ["subcat 1", "subcat 2"],
      },
    ]);
  }

  function handleSubcatSelect(e) {
    console.log(e);
  }

  const drawer = (
    <div>
      <Toolbar />
      <Searchbar searchHandler={handleSearch} />
      <SidebarAccordion
        options={options}
        handleSubcatSelect={handleSubcatSelect}
      />
    </div>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  axiosInstance
    .get(CATEGORIES)
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
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
          // p: 3,
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
          sx={{ display: { sm: "none" } }}
        >
          Select category
        </Button>
        <DocumentList />
        <ConversationLeft />
        <ConversationRight />
      </Box>
    </Box>
  );
}
