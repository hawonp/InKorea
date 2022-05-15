import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MainAppBar from "../../components/MainAppBar/MainAppBar";
import Searchbar from "../../components/Sidebar/Searchbar";
import SidebarAccordion from "../../components/Sidebar/SidebarAccordion";
import ConversationLeft from "../../components/ConversationLeft";
import ConversationRight from "../../components/ConversationRight";

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

  function handleSubcatSelect() {
    alert();
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
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
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
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          dictum, massa eget blandit dictum, massa tellus aliquet justo, ut
          facilisis elit felis at massa. Nulla euismod, mauris eget facilisis
          feugiat, leo enim rutrum libero, et hendrerit lacus felis eget urna.
          Suspendisse potenti. Fusce molestie, ipsum vitae venenatis suscipit,
          sem mi vulputate purus, a viverra leo turpis vel magna. Proin placerat
          facilisis risus gravida mattis. Phasellus purus justo, tempus quis
          finibus vitae, tempus mattis orci. Integer accumsan mi eu tincidunt
          tristique. Ut mollis ligula neque. In id ipsum tempus, gravida dolor
          ac, elementum sapien.
        </Typography>
        <ConversationLeft />
        <ConversationRight />
      </Box>
    </Box>
  );
}
