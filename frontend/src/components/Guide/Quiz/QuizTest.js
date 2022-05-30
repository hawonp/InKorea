import {Button, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import axiosInstance from "../../../utils/routeUtils";
import {QUIZ, SLASH} from "../../../utils/routeConstants";

export default function QuizTest(){
    const [answers, setAnswers] = useState([]);

    // function useAxios(){
    //
    // }

    function handleClick(){
        axiosInstance
            .get(QUIZ + SLASH + 1 + SLASH + "answers")
            .then((response) => {
                const data = response.data;
                setAnswers(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }


    return(<Button onClick={()=> handleClick()}>{console.log(answers)}</Button>);
}