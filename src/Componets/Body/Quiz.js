import { Box, Button, Container, Divider, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const App = () => {
  const questionsData = [

    {
      s_no: 1,
      question: "What does FCFS stand for in CPU scheduling?",
      answers: [
        { text: "(1) First Come First Served", isCorrect: true },
        { text: "(2)Fastest CPU First Served", isCorrect: false },
        { text: "(3) First CPU First Served", isCorrect: false },
        { text: "(4) Fastest Completion First Served", isCorrect: false },
      ],
    },
    {
      s_no: 2,
      question: "Which of the following statements about SJF (Shortest Job First) is true?",
      answers: [
        { text: "(1) SJF always results in the shortest waiting time.", isCorrect: false },
        { text: "(2) SJF may lead to starvation for longer processes.", isCorrect: false },
        { text: "(3)  SJF is non-preemptive.", isCorrect: false },
        { text: "(4) All of the above.", isCorrect: true },
      ],
    },
    {
      s_no: 3,
      question: "What is the primary difference between SJF and SRTF (Shortest Remaining Time First)?",
      answers: [
        { text: "(1) SJF is non-preemptive, while SRTF is preemptive.", isCorrect: true },
        { text: "(2) SJF is preemptive, while SRTF is non-preemptive.", isCorrect: false },
        { text: "(3) SJF and SRTF are the same algorithms.", isCorrect: false },
        { text: "(4) None of the above.", isCorrect: false },
      ],
    },
    {
      s_no: 4,
      question: "In Priority Scheduling, what happens if two processes have the same priority?",
      answers: [
        { text: "(1) They are scheduled randomly.", isCorrect: false },
        { text: "(2) They are scheduled using FCFS.", isCorrect: true },
        { text: "(3) They are scheduled using SJF.", isCorrect: false },
        { text: "(4) They are not scheduled.", isCorrect: false },
      ],
    },
    {
      s_no: 5,
      question: "What is a major drawback of Priority Preemptive Scheduling?",
      answers: [
        { text: "(1) High CPU utilization.", isCorrect: false },
        { text: "(2) Starvation of lower priority processes.", isCorrect: true },
        { text: "(3) Complex implementation.", isCorrect: false },
        { text: "(4) High waiting time for higher priority processes.", isCorrect: false },
      ],
    },
    {
      s_no: 6,
      question: "In Priority Non-Preemptive Scheduling, a process with a higher priority arriving while another process is running will:",
      answers: [
        { text: "(1) Preempt the currently running process.", isCorrect: false },
        { text: "(2) Wait until the currently running process finishes.", isCorrect: true },
        { text: "(3) Cause the system to crash.", isCorrect: false },
        { text: "(4) Run immediately if it has the same priority as the running process.", isCorrect: false },
      ],
    },
    {
      s_no: 7,
      question: "What is the key advantage of using the SRTF algorithm?",
      answers: [
        { text: "(1) It minimizes the average turnaround time.", isCorrect: true },
        { text: "(2) It is easy to implement.", isCorrect: false },
        { text: "(3) It ensures that no process will starve.", isCorrect: false },
        { text: "(4) It maximizes CPU utilization.", isCorrect: false },
      ],
    },
    {
      s_no: 8,
      question: "In a system using Priority Preemptive Scheduling, how is a running process affected when a new process with a higher priority arrives?",
      answers: [
        { text: "(1) The running process continues to run until it finishes.", isCorrect: false },
        { text: "(2) The running process is paused, and the higher priority process starts running.)", isCorrect: true },
        { text: "(3) Both processes run simultaneously.", isCorrect: false },
        { text: "(4) The system throws an error.", isCorrect: false },
      ],
    },
    {
      s_no: 9,
      question: "In which scheduling algorithm does the process that arrives first get executed first, regardless of its burst time?",
      answers: [
        { text: "(1) SJF", isCorrect: false },
        { text: "(2) SRTF", isCorrect: false },
        { text: "(3) FCFS", isCorrect: true },
        { text: "(4) Priority Preemptive", isCorrect: false },
      ],
    },
    
      {
        s_no: 11,
        question: "Which CPU scheduling algorithm can lead to the convoy effect? (Note:The convoy effect is a phenomenon in CPU scheduling where a set of processes waits for a single process that has a longer burst time to complete its execution)",
        answers: [
        { text: "(1) SRTF", isCorrect: false },
        { text: "(2) Priority Non-Preemptive", isCorrect: false },
        { text: "(3) FCFS", isCorrect: true },
        { text: "(4) Priority Preemptive", isCorrect: false },
        ],
        }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex + 1 < questionsData.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  const renderQuestion = () => {
    const currentQuestion = questionsData[currentQuestionIndex];
    return (
      <>
        <Heading fontSize={"2xl"}>{"Question  "}{currentQuestion.s_no}:- {currentQuestion.question}
        </Heading>

        <Box
          y display={"flex"}

          flexDirection={"column"}
          justifyContent={"space-between"}

        >
          {/* <Container > */}
          {currentQuestion.answers.map((answer, index) => (
            <Button justifyContent={'left'} m={1} colorScheme={"blue"}
              _hover={{ backgroundColor: "skyblue" }}
              key={index}
              onClick={() => handleAnswerButtonClick(answer.isCorrect)}
            >
              {answer.text}
            </Button>
          ))}
          {/* </Container> */}
        </Box>
      </>
    );
  };

  const renderResult = () => {
    return (
      <>
      
        <Box
          display={"flex"}

          borderColor={"black"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <Heading>Quiz Result</Heading>
          <Text fontStyle={"oblique"} fontSize={"2xl"}>
            Your Score: {score}
          </Text>


          <Box
            p={2} borderWidth={"2px"}
            shadow={"1px 2px 8px 3px black"}
            borderRadius={"20px"}
            alignContent={"center"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {questionsData.map((user) => (
              <Box display={"flex"}

                key={user.s_no} >
                <Text fontSize={"1xl"} fontWeight={"bold"}>{"Question  "}{user.s_no}:-{user.question} <Text color={"blue"}  >Answer{user.answers.map((answer) => (<p>{answer.isCorrect === true ? answer.text : ""}</p>))}</Text></Text>
              </Box>

            ))}
          </Box>
          <Button mt={2} colorScheme="pink" onClick={restartQuiz}>
            Restart Quiz
          </Button>
        </Box>
      </>
    );
  };

  return (
    <Box
      display={"flex"}
      m={3}
      borderWidth={"2px"}
      shadow={"1px 2px 8px 3px black"}
      borderRadius={"20px"}
      flexDirection={"Column"}
      justifyContent={"center"}
      alignItems={"center"}
    >

      <Heading>CPU Scheduling Quiz</Heading>
      <Text
          fontStyle={"italic"}
          fontSize={"sm"}
          color={"red.500"}
          textAlign={"right"}
          mr={2}
        >
        Note:You cannot change your answer so select carefully.There is only one correct option to each question
        </Text>
        
      {showResult ? renderResult() : renderQuestion()}
    </Box>
  );
};

export default App;
