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
import {Popper, Typography} from "@mui/material";
import { Stack } from "@mui/material";
import axios from "axios";
import Grid from "@mui/material/Grid";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReplayIcon from '@mui/icons-material/Replay';
// import questions from '../Quiz/Questions';


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
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [isWrong, setIsWrong] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showPopper, setShowPopper] = useState(false);

  const [wrongAnswerAnchor, setWrongAnswerAnchor] = React.useState(null);
  // const [rightAnswerAnchor, setRightAnswerAnchor] = React.useState(null);

  const handleClick = (isCorrect) => (event) => {
    if(isCorrect){
      setIsWrong(true);
    }
    else{
      setIsWrong(false);
    }
      setWrongAnswerAnchor(wrongAnswerAnchor ? null : event.currentTarget);

    // else{
    //   setRightAnswerAnchor(rightAnswerAnchor ? null : event.currentTarget);
    // }

  };

  const openPopper = Boolean(wrongAnswerAnchor);
  const wrongAnswerPopper = openPopper ? 'wrong-answer-popper' : undefined;
 // const rightAnswerPopper = openPopper ? 'right-answer-popper' : undefined;

  const questions = [
    {
      questionText: 'How do you say bank?',
      answerOptions: [
        { answerText: '은행 (Eun-haeng)', isCorrect: true },
        { answerText: '계좌 (Gye-jwa)', isCorrect: false },
        { answerText: '신분증 (Shin-boon-cheung)', isCorrect: false },
        { answerText: '통장 (Tong-jang)', isCorrect: false },
      ],
    },
    {
      questionText: 'How do you say bank account?',
      answerOptions: [
        { answerText: '계정 (Gye-jeong)', isCorrect: false },
        { answerText: '계산 (Gye-san)', isCorrect: false },
        { answerText: '계좌 (Gye-jwa))', isCorrect: true },
        { answerText: '은행 (Eun-haeng)', isCorrect: false },
      ],
    },
    {
      questionText: 'How do you say bank book?',
      answerOptions: [
        { answerText: '계산 (Gye-san)', isCorrect: false },
        { answerText: '통장 (Tong-jang)', isCorrect: true },
        { answerText: '은행 책 (Eun-haeng chaek)', isCorrect: false },
        { answerText: '돈 (Don)', isCorrect: false },
      ],
    },
    {
      questionText: 'How do you say ID card?',
      answerOptions: [
        { answerText: '여권 (Yeo-kwon)', isCorrect: false },
        { answerText: '통장 (Tong-jang))', isCorrect: false },
        { answerText: '비밀 번호 (Bi-mil beon-ho)', isCorrect: false },
        { answerText: '신분증 (Shin-boon-cheung)', isCorrect: true },
      ],
    },
  ];


  function handleAnswerOptionClick() {
      if(isWrong){
        setScore(score + 1);
      }
      setIsWrong(false);
      setWrongAnswerAnchor(null);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }

  }

  function renderButtons(){
    return(
        <Grid container direction={"row"} columns={{xs:2, md:4, xl:4}}>
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
              <Grid item xs={2}>
              <Button
                  // style={{backgroundColor: isWrong ? 'salmon' : '',}}
                  sx={{border: "1px solid grey", color: "black", margin:.5, width:'270px'}}

                      // onClick={() => {
                      //   handleAnswerOptionClick(answerOption.isCorrect);
                      //
                      // }}
                  onClick={handleClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </Button>
              </Grid>
          ))}
          <div>
            <Popper id={wrongAnswerPopper} open={openPopper} anchorEl={wrongAnswerAnchor} sx={{zIndex: theme.zIndex.modal}}>
              {tryAgain(isWrong)}
            </Popper>
          </div>
        </Grid>
    );
  }

  function tryAgain (isWrong) {
    if(!isWrong){
      return(
          <Box sx={{ border: 1, p: 1, backgroundColor: 'background.paper' , color: "red"}}>
            <Typography>Try Again!</Typography>
          </Box>
      );
    }
    else{
      return(
          <Box sx={{ border: 1, p: 1, backgroundColor: 'background.paper' , color: "green"}}>
            <Typography>Correct!</Typography>
          </Box>
      );
    }
  }


  // Handlers
  const handleClose = () => {
    setOpen(false);
    setQuestionId(1);
    setWrongAnswerAnchor(null);
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
    setIsWrong(false);
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
            // fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="docdetails-dialog-title"
            fullWidth={true}
          >
            {/*<DialogTitle id="docdetails-dialog-title" fontSize={30} alignSelf={"center"}>Creating a bank account</DialogTitle>*/}
            <DialogContent>
              <Stack justifyContent={"center"} direction={"row"}>
                {showScore ? (
                    <Stack>
                      <Typography alignSelf={"center"}>You scored {score} out of {questions.length}</Typography>
                      <Typography>Would you like to try again?</Typography>
                        <Button disableRipple={true} style={{backgroundColor:'transparent'}} sx={{marginTop:2}} onClick={handleQuizFabQuiz}>
                          <ReplayIcon fontSize={"large"}/>
                        </Button>
                    </Stack>

                ) : (
                  <>

                        <Stack spacing={2}>
                          <Stack spacing={1}>
                            <Typography
                              marginTop={2}
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
                          <Button style={{backgroundColor: 'transparent'}} disableRipple={true} sx={{marginTop:5}} onClick={handleAnswerOptionClick}>
                            <PlayArrowIcon fontSize={"large"}/>
                          </Button>
                        </Stack>

                  </>
                )}
                {/*<Button>Next</Button>*/}
              </Stack>
            </DialogContent>
            <DialogActions sx={{justifyContent: "right"}}>
              <Button onClick={handleClose} autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </div>
    </Box>
  );
}
