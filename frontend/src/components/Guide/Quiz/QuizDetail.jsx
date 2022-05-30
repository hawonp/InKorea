import React, {useEffect} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {Stack, Typography} from "@mui/material";
import axiosInstance from "../../../utils/routeUtils";
import {QUIZ, SLASH} from "../../../utils/routeConstants";
import {useState} from "@types/react";

export default function QuizDetail() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [answers, setAnswers] = useState([]);
  const [open, setOpen] = useState(false);

  // Handlers
  const handleClose = () => {
    setOpen(false);
  };

  function useAxios(){
    useEffect(()=>{
      axiosInstance
          .get(QUIZ + SLASH + 1 + SLASH + "answers")
          .then((response) => {
            const data = response.data;
            setAnswers(data);
          })
          .catch((e) => {
            console.log(e);
          });
    },[]);
  }

  useAxios();

  return (
      <Typography>Some textasdfasdfasdfasdf</Typography>
      // <Stack spacing={1}>
      //   {answers.map((answerOption) => (
      //       <Button
      //           sx={{
      //             border: "1px solid grey",
      //             color: "white",
      //           }}
      //           onClick={() =>
      //               handleAnswerOptionClick(
      //                   answerOption["is_correct"]
      //               )
      //           }
      //       >
      //         {answerOption["answer_text"]}
      //       </Button>
      //   ))}
      // </Stack>
  );
}
