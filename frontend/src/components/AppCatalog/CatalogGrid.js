import * as React from 'react';
import Grid from '@mui/material/Grid';
import AppBox from "../../components/AppCatalog/AppBox";

export default function CatalogGrid() {
    return (
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(9)).map((_, index) => (
                    <Grid item xs={"auto"} sm={3} md={3} key={index}>
                        <AppBox></AppBox>
                    </Grid>
                ))}
            </Grid>
    );
}
