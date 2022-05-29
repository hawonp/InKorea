import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function MainAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "white" }}>
        <Toolbar>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { sm: "block" } }}
            >
              InKorea
            </Typography>
          </Link>
          <Typography
            align="left"
            variant="h6"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Link to="/guide">
            <Button color="inherit">Scenarios</Button>
          </Link>
          <Link to="/appcatalog">
            <Button color="inherit">App catalog</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
