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
      <AppBar position="static">
        <Toolbar>
          <Typography
            align="center"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link to="/guide">InKorea</Link>
          </Typography>
          |
          <Link to="/appcatalog">
            <Button color="inherit">App catalog</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
