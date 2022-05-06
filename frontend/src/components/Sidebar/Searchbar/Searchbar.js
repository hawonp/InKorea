import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

export default function Searchbar({ searchHandler }) {
  let inputValue = "";

  const searchIconButton = (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="span"
      onClick={() => searchHandler(inputValue)}
    >
      <SearchIcon />
    </IconButton>
  );

  return (
    <Box sx={{ m: 1 }}>
      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        onChange={(event) => {
          inputValue = event.target.value;
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            // Prevent's default 'Enter' behavior.
            event.defaultMuiPrevented = true;
            searchHandler(inputValue);
          }
        }}
        InputProps={{
          endAdornment: searchIconButton,
        }}
      />
    </Box>
  );
}
