import React, { useState } from "react";
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
import Popper from "@mui/material/Popper";
import getParentNode from "@popperjs/core/lib/dom-utils/getParentNode";

const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
  backgroundColor: "#7cc6fe",
};

export default function Quiz({ id }) {
  const [selectedSubcategory, setSelectedSubcategory] = useState(-1);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // const questions = [
  //   {
  //     questionText: 'What is the capital of France?',
  //     answerOptions: [
  //       { answerText: 'New York', isCorrect: false },
  //       { answerText: 'London', isCorrect: false },
  //       { answerText: 'Paris', isCorrect: true },
  //       { answerText: 'Dublin', isCorrect: false },
  //     ],
  //   },
  //   {
  //     questionText: 'Who is CEO of Tesla?',
  //     answerOptions: [
  //       { answerText: 'Jeff Bezos', isCorrect: false },
  //       { answerText: 'Elon Musk', isCorrect: true },
  //       { answerText: 'Bill Gates', isCorrect: false },
  //       { answerText: 'Tony Stark', isCorrect: false },
  //     ],
  //   },
  //   {
  //     questionText: 'The iPhone was created by which company?',
  //     answerOptions: [
  //       { answerText: 'Apple', isCorrect: true },
  //       { answerText: 'Intel', isCorrect: false },
  //       { answerText: 'Amazon', isCorrect: false },
  //       { answerText: 'Microsoft', isCorrect: false },
  //     ],
  //   },
  //   {
  //     questionText: 'How many Harry Potter books are there?',
  //     answerOptions: [
  //       { answerText: '1', isCorrect: false },
  //       { answerText: '4', isCorrect: false },
  //       { answerText: '6', isCorrect: false },
  //       { answerText: '7', isCorrect: true },
  //     ],
  //   },
  // ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  function handleAnswerOptionClick(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    } else {
    }
  }

  // Handlers
  const handleClose = () => {
    setOpen(false);
  };

  function handleQuizFabQuiz(id, title) {
    setOpen(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    axiosInstance
      .get(QUIZ, {
        params: {
          subcategory_id: id,
        },
      })
      .then((response) => {
        const data = response.data;
        setQuestions(data);
        console.log(questions);
      })
      .catch((e) => {
        console.log(e);
      });
    axiosInstance
      .get(QUIZ + SLASH + id + SLASH + "answers")
      .then((response) => {
        const data = response.data;
        setAnswers(data);
        console.log(answers);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // function makeQuiz (questions, answers){
  //
  //   for(let i=0;i<questions.length;i++){
  //     quizDictionary.push({questionText:questions[i].questionText, answerOptions: answers});
  //   }
  // }

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab
        variant="extended"
        style={style}
        onClick={() => handleQuizFabQuiz("1")}
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
            <DialogContent style={{ backgroundColor: "#252d4a" }}>
              <div>
                {showScore ? (
                  <Typography color={"white"}>
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
                              color={"#ffffff"}
                            >
                              Question {currentQuestion + 1}/{questions.length}
                            </Typography>
                            <Typography alignSelf={"center"} color={"#ffffff"}>
                              {" "}
                              How do you say "Bank?"
                            </Typography>
                            {/*{console.log(questions[0]["question_text"])}*/}
                          </Stack>
                          <div className="answer-section">
                            <Stack spacing={1}>
                              {answers.map((answerOption) => (
                                <Button
                                  sx={{
                                    border: "1px solid grey",
                                    color: "white",
                                  }}
                                  onClick={() =>
                                    handleAnswerOptionClick(
                                      answerOption["is_correct"]
                                    )
                                  }
                                >
                                  {answerOption["answer_text"]}
                                </Button>
                              ))}
                            </Stack>
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
          </Dialog>
        </Box>
      </div>
    </Box>
  );
}
