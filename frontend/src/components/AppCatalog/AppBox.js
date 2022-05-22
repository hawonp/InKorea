import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import AbcIcon from '@mui/icons-material/Abc';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function AppBox() {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://upload.wikimedia.org/wikipedia/commons/e/e3/KakaoTalk_logo.svg"
                alt="KakaoTalk Logo"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        KakaoTalk
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        #Texting#SocialMedia
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 0, pb: 0}}>
                        <AppleIcon></AppleIcon>
                        <AndroidIcon></AndroidIcon>
                        <AbcIcon></AbcIcon>
                    </Box>
                </CardContent>

                <Button>
                    See More
                </Button>
            </Box>
        </Card>
    );
}

