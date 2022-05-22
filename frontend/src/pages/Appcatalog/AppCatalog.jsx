import MainAppBar from "../../components/MainAppBar/MainAppBar";
import CatalogGrid from "../../components/AppCatalog/CatalogGrid";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";

export default function AppCatalog() {
  return (
    <div>
      <MainAppBar />
      <h2 align={"center"}> App Catalog</h2>
        <Grid alignItems={"center"}>
            <Container maxWidth={"xl"}>
                <Box sx={{justifyContent:'right', p:3}}>
                    <TextField id="standard-basic" label="Search" variant="standard" />
                </Box>
                <CatalogGrid/>
            </Container>
        </Grid>
    </div>
  );
}
