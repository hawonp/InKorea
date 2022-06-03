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
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [isWrong, setIsWrong] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongAnswerAnchor, setWrongAnswerAnchor] = React.useState(null);
  const openPopper = Boolean(wrongAnswerAnchor);
  const wrongAnswerPopper = openPopper ? 'wrong-answer-popper' : undefined;
  const [closePopper, setClosePopper] = useState(false);
  const [placement, setPlacement] = React.useState();

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

  const questions2 = [
    {
      questionText: 'How do you phone number?',
      answerOptions: [
        { answerText: '전화 번호 (Jeon-hwa beon-ho)', isCorrect: true },
        { answerText: '계좌 (Gye-jwa)', isCorrect: false },
        { answerText: '신분증 (Shin-boon-cheung)', isCorrect: false },
        { answerText: '통장 (Tong-jang)', isCorrect: false },
      ],
    },
    {
      questionText: 'How do you say sign here?',
      answerOptions: [
        { answerText: '계정 (Gye-jeong)', isCorrect: false },
        { answerText: '계산 (Gye-san)', isCorrect: false },
        { answerText: '여기에 싸인 해주세요 (Yeo-gi-eh sign hae-ju-sae-yo))', isCorrect: true },
        { answerText: '은행 (Eun-haeng)', isCorrect: false },
      ],
    },
    {
      questionText: 'How do you say activate?',
      answerOptions: [
        { answerText: '계산 (Gye-san)', isCorrect: false },
        { answerText: '활성화 (Hwal-seong-hwa)', isCorrect: true },
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

  function renderButtons(){
    if(id===1){
      return(
          <Grid container direction={"row"} columns={{xs:2, md:4, xl:4}}>

            {questions[currentQuestion].answerOptions.map((answerOption) => (
                <Grid item xs={2}>
                  <Button
                      sx={{border: "1px solid grey", margin:.5, width:'270px', height:'100px'}}
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
    else if(id===7){
      return(
          <Grid container direction={"row"} columns={{xs:2, md:4, xl:4}}>

            {questions2[currentQuestion].answerOptions.map((answerOption) => (
                <Grid item xs={2}>
                  <Button
                      sx={{border: "1px solid grey", margin:.5, width:'270px', height:'100px'}}
                      onClick={handleClick(answerOption.isCorrect)}>
                    {answerOption.answerText}
                  </Button>
                </Grid>
            ))}
            <div>
              <Popper id={wrongAnswerPopper} open={openPopper} anchorEl={wrongAnswerAnchor} sx={{zIndex: theme.zIndex.modal}}>
                {tryAgain()}
              </Popper>
            </div>
          </Grid>
      );
    }


  }

  function tryAgain () {
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

  function generateQuestion(){
    if(id===1){
      return(
          <Typography alignSelf={"center"} color={'#84A98C'}>
            {questions[currentQuestion].questionText}
          </Typography>
      );
    }
    else if(id===7){
      return(
          <Typography alignSelf={"center"} color={'#84A98C'}>
            {questions2[currentQuestion].questionText}
          </Typography>
      );
    }
  }

  // Handlers
  const handleClose = () => {
    setOpen(false);
    setWrongAnswerAnchor(null);
  };

  function handleQuizFabQuiz() {
    setOpen(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setIsWrong(false);
  }

  const handleClick = (isCorrect, newPlacement) => (event) => {
    setWrongAnswerAnchor(wrongAnswerAnchor ? null : event.currentTarget);
    setClosePopper((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
    if(isCorrect){
      setIsWrong(true);
    }
    else{
      setIsWrong(false);
    }

  };

  function handleNextButtonClick() {
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
            <DialogContent style={{backgroundColor:'#2F3E46'}}>
              <Stack justifyContent={"center"} direction={"row"}>
                {showScore ? (
                    <Stack>
                      <Typography color={'#84A98C'} alignSelf={"center"}>You scored {score} out of {questions.length}</Typography>
                      <Typography color={'#84A98C'}>Would you like to try again?</Typography>
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
                              color={'#84A98C'}
                            >
                              Question {currentQuestion + 1}/{questions.length}
                            </Typography>
                            {generateQuestion()}
                          </Stack>
                          <div className="answer-section">
                            {renderButtons()}
                          </div>
                          <Button style={{backgroundColor: 'transparent'}} disableRipple={true} sx={{marginTop:5}} onClick={handleNextButtonClick}>
                            <PlayArrowIcon fontSize={"large"}/>
                          </Button>
                        </Stack>

                  </>
                )}
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
