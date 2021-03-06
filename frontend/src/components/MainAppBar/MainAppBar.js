import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../../assets/images/logo.png";
import { white } from "@mui/material/colors";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
// import IconButton from "@mui/material/IconButton";

export default function MainAppBar() {
  // const [darkMode, setDarkMode] = useState(false);

  // const handleClick = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "primary.main" }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button>
              <Typography style={{ color: "#FFFFFF" }}>InKorea</Typography>
            </Button>
          </Link>

          <Typography
            align="left"
            variant="h6"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Link to="/guide" style={{ textDecoration: "none" }}>
            <Button>
              <Typography style={{ color: "#FFFFFF" }}>Scenarios</Typography>
            </Button>
          </Link>
          <Link to="/appcatalog" style={{ textDecoration: "none" }}>
            <Button>
              <Typography style={{ color: "#FFFFFF" }}>App catalog</Typography>
            </Button>
          </Link>
          {/* {darkMode ? (
            <IconButton color="primary" onClick={handleClick}>
              <Brightness4Icon />
            </IconButton>
          ) : (
            <IconButton color="primary" onClick={handleClick}>
              <Brightness7Icon />
            </IconButton>
          )} */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
