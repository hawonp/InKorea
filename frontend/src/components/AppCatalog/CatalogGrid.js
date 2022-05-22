import * as React from 'react';
import Grid from '@mui/material/Grid';
import AppBox from "../../components/AppCatalog/AppBox";
import {useState} from "@types/react";
import axiosInstance from "../../utils/routeUtils";
import {APPS} from "../../utils/routeConstants";

export default function CatalogGrid(id) {

    const [appID, setAppID] = useState(-1);

    if (appID !== id) {
        axiosInstance
            .get(APPS, {
                params: {
                    app_id: id,
                },
            })
            .then((response) => {
                const data = response.data;
                var temp_data = [];
                for (let i = 0; i < data.length; i++) {
                    temp_data.push(data[i]["app_id"]);
                }
                setAppID(id);
            })
            .catch((e) => {
                console.log(e);
            });
    }
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
