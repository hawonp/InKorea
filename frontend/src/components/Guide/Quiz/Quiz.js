import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import { QUIZ, INFO, SLASH } from "../../../utils/routeConstants";
import axiosInstance from "../../../utils/routeUtils";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import axios from "axios";
import QuizTest from "./QuizTest";
import Grid from "@mui/material/Grid";

const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
  // backgroundColor: "#7cc6fe",
};

export default function Quiz({ id }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(-1);
  const [questionId, setQuestionId] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: 'How do you say bank?',
      answerOptions: [
        { answerText: '은행', isCorrect: true },
        { answerText: '계좌', isCorrect: false },
        { answerText: '신분증', isCorrect: false },
        { answerText: '통장', isCorrect: false },
      ],
    },
    {
      questionText: 'How do you say bank account?',
      answerOptions: [
        { answerText: '계정', isCorrect: false },
        { answerText: '계산', isCorrect: false },
        { answerText: '계좌', isCorrect: true },
        { answerText: '은행', isCorrect: false },
      ],
    },
    {
      questionText: 'How do you say bank book?',
      answerOptions: [
        { answerText: '계산', isCorrect: false },
        { answerText: '통장', isCorrect: true },
        { answerText: '은행 책', isCorrect: false },
        { answerText: '돈', isCorrect: false },
      ],
    },
    {
      questionText: 'How do you say ID card?',
      answerOptions: [
        { answerText: '여권', isCorrect: false },
        { answerText: '통장', isCorrect: false },
        { answerText: '비밀 번호', isCorrect: false },
        { answerText: '신분증', isCorrect: true },
      ],
    },
  ];


  function handleAnswerOptionClick(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }
  }

  function renderButtons(){
    return(
        <Stack spacing={1}>
          {/*{answers.map((answerOption) => (*/}
          {/*    <Button*/}
          {/*        sx={{*/}
          {/*          border: "1px solid grey",*/}
          {/*          color: "black"*/}
          {/*        }}*/}
          {/*        onClick={() =>*/}
          {/*            handleAnswerOptionClick(*/}
          {/*                answerOption["is_correct"]*/}
          {/*            )*/}
          {/*        }*/}
          {/*    >*/}
          {/*      {answerOption["answer_text"]}*/}
          {/*    </Button>*/}
          {/*))}*/}
          {questions[currentQuestion].answerOptions.map((answerOption) => (
              <Button sx={{border: "1px solid grey", color: "black"}}
                      onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
          ))}

        </Stack>
    );
  }

  // Handlers
  const handleClose = () => {
    setOpen(false);
    setQuestionId(1);
  };

  // function useQuestionAxios(){
  //   useEffect(()=>{
  //     axiosInstance
  //         .get(QUIZ, {
  //           params: {
  //             subcategory_id: id,
  //           },
  //         })
  //         .then(response => {
  //           const data = response.data;
  //             setQuestions(data);
  //             console.log(questions);
  //         })
  //         .catch((e) => {
  //           console.log(e);
  //         });
  //   },[]);
  // }
  //
  // useQuestionAxios();

  // function axiosAnswers(){
  //   axiosInstance
  //       .get(QUIZ + SLASH + questionId + SLASH + "answers")
  //       .then((response) => {
  //         const data = response.data;
  //         setAnswers(data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  // }

  function handleQuizFabQuiz() {
    setOpen(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    // axiosInstance
    //     .get(QUIZ, {
    //       params: {
    //         subcategory_id: id,
    //       },
    //     })
    //     .then((response) => {
    //       const data = response.data;
    //         setQuestions(data);
    //       console.log(questions);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // axiosAnswers();
    // makeQuestionAnswerSet();
  }

  // function isRendered(){
  //   if(questions.length!==0){
  //     const renderedQuestion = questions[currentQuestion]["question_text"];
  //     //console.log(questionAnswer);
  //     return renderedQuestion;
  //   }
  // }


  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab
        variant="extended"
        // color="primary"
        style={style}
        onClick={() => handleQuizFabQuiz()}
      >
        Take a Quiz!
      </Fab>
      <div>
        <Box>
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="docdetails-dialog-title"
          >
            {/*<DialogTitle id="docdetails-dialog-title">Title</DialogTitle>*/}
            <Grid flex={"fit-content"}>
            <DialogContent>

              <div>
                {showScore ? (
                  <Typography>
                    You scored {score} out of {questions.length}
                  </Typography>
                ) : (
                  <>
                    <div>
                      <div>
                        <Stack direction={"row"} spacing={2}>
                          <Stack spacing={1}>
                            <Typography
                              marginTop={5}
                              alignSelf={"center"}
                              fontSize={30}
                            >
                              Question {currentQuestion + 1}/{questions.length}
                            </Typography>
                            <Typography alignSelf={"center"}>
                              {/*{isRendered()}*/}
                              {questions[currentQuestion].questionText}
                            </Typography>
                          </Stack>
                          <div className="answer-section">
                            {renderButtons()}
                          </div>
                        </Stack>
                      </div>
                    </div>
                  </>
                )}
              </div>

            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Close
              </Button>
            </DialogActions>
            </Grid>
          </Dialog>
        </Box>
      </div>
    </Box>
  );
}
