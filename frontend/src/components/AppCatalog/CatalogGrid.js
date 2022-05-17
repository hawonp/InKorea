import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBox from "../../components/AppCatalog/AppBox";

export default function CatalogGrid() {
    return (
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(1)).map((_, index) => (
                    <Grid item xs={"auto"} sm={4} md={4} key={index}>
                        <AppBox></AppBox>
                    </Grid>
                ))}
            </Grid>
    );
}
