import React, { useEffect, useState } from "react";
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
import Grid from "@mui/material/Grid";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ReplayIcon from "@mui/icons-material/Replay";

const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
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
  const wrongAnswerPopper = openPopper ? "wrong-answer-popper" : undefined;
  const [popperOpen, setPopperOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isAnswered, setIsAnswered] = useState(true);

  const questions = [
    {
      questionIndex: "1",
      questionText: "How do you say bank?",
      answerOptions: [
        { answerText: "ěí (Eun-haeng)", isCorrect: true },
        { answerText: "ęłě˘ (Gye-jwa)", isCorrect: false },
        { answerText: "ě ëśěŚ (Shin-boon-cheung)", isCorrect: false },
        { answerText: "íľěĽ (Tong-jang)", isCorrect: false },
      ],
    },
    {
      questionIndex: "2",
      questionText: "How do you say bank account?",
      answerOptions: [
        { answerText: "ęłě  (Gye-jeong)", isCorrect: false },
        { answerText: "ęłě° (Gye-san)", isCorrect: false },
        { answerText: "ęłě˘ (Gye-jwa)", isCorrect: true },
        { answerText: "ěí (Eun-haeng)", isCorrect: false },
      ],
    },
    {
      questionIndex: "3",
      questionText: "How do you say bank book?",
      answerOptions: [
        { answerText: "ęłě° (Gye-san)", isCorrect: false },
        { answerText: "íľěĽ (Tong-jang)", isCorrect: true },
        { answerText: "ěí ěą (Eun-haeng chaek)", isCorrect: false },
        { answerText: "ë (Don)", isCorrect: false },
      ],
    },
    {
      questionIndex: "4",
      questionText: "How do you say ID card?",
      answerOptions: [
        { answerText: "ěŹęś (Yeo-kwon)", isCorrect: false },
        { answerText: "íľěĽ (Tong-jang))", isCorrect: false },
        { answerText: "ëšë° ë˛í¸ (Bi-mil beon-ho)", isCorrect: false },
        { answerText: "ě ëśěŚ (Shin-boon-cheung)", isCorrect: true },
      ],
    },
  ];

  const questions2 = [
    {
      questionText: "How do you phone number?",
      answerOptions: [
        { answerText: "ě í ë˛í¸ (Jeon-hwa beon-ho)", isCorrect: true },
        { answerText: "ęłě˘ (Gye-jwa)", isCorrect: false },
        { answerText: "ě ëśěŚ (Shin-boon-cheung)", isCorrect: false },
        { answerText: "íľěĽ (Tong-jang)", isCorrect: false },
      ],
    },
    {
      questionText: "How do you say sign here?",
      answerOptions: [
        { answerText: "ęłě  (Gye-jeong)", isCorrect: false },
        { answerText: "ęłě° (Gye-san)", isCorrect: false },
        {
          answerText: "ěŹę¸°ě ě¸ě¸ í´ěŁźě¸ě (Yeo-gi-eh sign hae-ju-sae-yo)",
          isCorrect: true,
        },
        { answerText: "ěí (Eun-haeng)", isCorrect: false },
      ],
    },
    {
      questionText: "How do you say activate?",
      answerOptions: [
        { answerText: "ęłě° (Gye-san)", isCorrect: false },
        { answerText: "íěąí (Hwal-seong-hwa)", isCorrect: true },
        { answerText: "ěí ěą (Eun-haeng chaek)", isCorrect: false },
        { answerText: "ë (Don)", isCorrect: false },
      ],
    },
    {
      questionText: "How do you say ID card?",
      answerOptions: [
        { answerText: "ěŹęś (Yeo-kwon)", isCorrect: false },
        { answerText: "íľěĽ (Tong-jang))", isCorrect: false },
        { answerText: "ëšë° ë˛í¸ (Bi-mil beon-ho)", isCorrect: false },
        { answerText: "ě ëśěŚ (Shin-boon-cheung)", isCorrect: true },
      ],
    },
  ];

  function renderButtons() {
    if (id === 1) {
      return (
        <Grid container direction={"row"} columns={{ xs: 2, md: 4, xl: 4 }}>
          {questions[currentQuestion].answerOptions.map(
            (answerOption, index) => (
              <Grid item xs={2} key={index}>
                <div>
                  {isAnswered && selectedIndex === index && isWrong ? (
                    <Button
                      color={"primary"}
                      sx={{
                        border: "3px solid green",
                        margin: 0.5,
                        width: "270px",
                        height: "100px",
                      }}
                      onClick={handleClick(answerOption.isCorrect, index)}
                    >
                      {answerOption.answerText}
                    </Button>
                  ) : (
                    <Button
                      color={"primary"}
                      sx={{
                        border:
                          !isWrong && selectedIndex === index
                            ? "3px solid red"
                            : "1px solid grey",
                        margin: 0.5,
                        width: "270px",
                        height: "100px",
                      }}
                      onClick={handleClick(answerOption.isCorrect, index)}
                    >
                      {answerOption.answerText}
                    </Button>
                  )}
                </div>
              </Grid>
            )
          )}
        </Grid>
      );
    } else if (id === 7) {
      return (
        <Grid container direction={"row"} columns={{ xs: 2, md: 4, xl: 4 }}>
          {questions2[currentQuestion].answerOptions.map(
            (answerOption, index) => (
              <Grid item xs={2} key={index}>
                {isAnswered && selectedIndex === index && isWrong ? (
                  <Button
                    color={"primary"}
                    sx={{
                      border: "3px solid green",
                      margin: 0.5,
                      width: "270px",
                      height: "100px",
                    }}
                    onClick={handleClick(answerOption.isCorrect, index)}
                  >
                    {answerOption.answerText}
                  </Button>
                ) : (
                  <Button
                    color={"primary"}
                    sx={{
                      border:
                        !isWrong && selectedIndex === index
                          ? "3px solid red"
                          : "1px solid grey",
                      margin: 0.5,
                      width: "270px",
                      height: "100px",
                    }}
                    onClick={handleClick(answerOption.isCorrect, index)}
                  >
                    {answerOption.answerText}
                  </Button>
                )}
              </Grid>
            )
          )}
        </Grid>
      );
    }
  }

  function generateQuestion() {
    if (id === 1) {
      return (
        <Typography color={"text.primary"} alignSelf={"center"}>
          {questions[currentQuestion].questionText}
        </Typography>
      );
    } else if (id === 7) {
      return (
        <Typography color={"text.primary"} alignSelf={"center"}>
          {questions2[currentQuestion].questionText}
        </Typography>
      );
    }
  }

  // Handlers
  const handleClose = () => {
    setOpen(false);
    setWrongAnswerAnchor(null);
    setSelectedIndex(-1);
  };

  function handleQuizFabQuiz() {
    setOpen(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setIsWrong(false);
    setSelectedIndex(-1);
  }

  const handleClick = (isCorrect, index) => (event) => {
    setWrongAnswerAnchor(null);
    setWrongAnswerAnchor(wrongAnswerAnchor ? null : event.currentTarget);
    setSelectedIndex(index);
    if (isCorrect) {
      setIsWrong(true);
      setIsAnswered(true);
    } else {
      setIsWrong(false);
      setIsAnswered(false);
    }
    console.log(index);
  };

  function handleNextButtonClick() {
    setIsAnswered(true);
    setSelectedIndex(-1);
    if (isWrong) {
      setScore(score + 1);
    }
    setIsWrong(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  function correctAnswers() {
    if (id === 1) {
      return (
        <Stack alignItems={"left"}>
          <Typography color={"text.primary"}>1. ěí (Eun-haeng)</Typography>
          <Typography color={"text.primary"}>2. ęłě˘ (Gye-jwa)</Typography>
          <Typography color={"text.primary"}>3. íľěĽ (Tong-jang)</Typography>
          <Typography color={"text.primary"}>
            4. ě ëśěŚ (Shin-boon-cheung)
          </Typography>
        </Stack>
      );
    } else if (id === 7) {
      return (
        <Stack alignItems={"center"}>
          <Typography color={"text.primary"}>
            1. ě í ë˛í¸ (Jeon-hwa beon-ho)
          </Typography>
          <Typography color={"text.primary"}>
            2. ěŹę¸°ě ě¸ě¸ í´ěŁźě¸ě (Yeo-gi-eh sign hae-ju-sae-yo)
          </Typography>
          <Typography color={"text.primary"}>
            3. íěąí (Hwal-seong-hwa)
          </Typography>
          <Typography color={"text.primary"}>
            4. ě ëśěŚ (Shin-boon-cheung)
          </Typography>
        </Stack>
      );
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
            <DialogContent>
              <Stack justifyContent={"center"} direction={"row"}>
                {showScore ? (
                  <Stack>
                    <Typography
                      color={"text.primary"}
                      alignSelf={"center"}
                      fontSize={30}
                    >
                      You scored {score} out of {questions.length}
                    </Typography>
                    <Typography
                      color={"text.primary"}
                      alignSelf={"center"}
                      marginTop={2}
                    >
                      Correct Answers
                    </Typography>
                    <Typography color={"primary"} marginTop={1}>
                      {correctAnswers()}
                    </Typography>
                    <Typography
                      color={"text.primary"}
                      alignSelf={"center"}
                      marginTop={2}
                    >
                      Would you like to try again?
                    </Typography>
                    <Button
                      color={"primary"}
                      disableRipple={true}
                      style={{ backgroundColor: "transparent" }}
                      sx={{ marginTop: 2 }}
                      onClick={handleQuizFabQuiz}
                    >
                      <ReplayIcon fontSize={"large"} />
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
                          color={"primary"}
                        >
                          Question {currentQuestion + 1}/{questions.length}
                        </Typography>
                        {generateQuestion()}
                      </Stack>
                      <div className="answer-section">{renderButtons()}</div>
                      <Button
                        color={"primary"}
                        style={{ backgroundColor: "transparent" }}
                        disableRipple={true}
                        sx={{ marginTop: 5 }}
                        onClick={handleNextButtonClick}
                      >
                        <PlayArrowIcon fontSize={"large"} />
                      </Button>
                    </Stack>
                  </>
                )}
              </Stack>
            </DialogContent>
            <DialogActions sx={{ justifyContent: "right" }}>
              <Button color={"primary"} onClick={handleClose} autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </div>
    </Box>
  );
}
