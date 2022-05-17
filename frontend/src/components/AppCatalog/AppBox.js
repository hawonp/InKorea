import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import AbcIcon from '@mui/icons-material/Abc';

const stack = (
        <Box sx={{ p: 3, border: '2px solid grey' }}>
            <Stack spacing={2}>
                <Box sx={{border: '1px solid grey', bgcolor:'#FFE812'}}>
                    <Stack direction={"row"} spacing={3}>

                        <text>Kakao Talk</text>
                        <AppleIcon></AppleIcon>
                        <AndroidIcon></AndroidIcon>
                        <AbcIcon></AbcIcon>
                    </Stack>
                </Box>
                <text>Extremely long description about what will happen in this box and how you can use the text</text>
                <Box sx={{border: '1px solid grey'}}>
                    <Button> See More</Button>
                </Box>
            </Stack>
        </Box>
);



export default function AppBox() {
    return (
       stack
    );
}
