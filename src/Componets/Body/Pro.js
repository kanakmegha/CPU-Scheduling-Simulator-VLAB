import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import { faArrowCircleRight, faCircleDot, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Pro() {
  return (
    <>
      <Box
        display={"block"}
        flexDirection={"column"}
        m={3}
        borderWidth={"2px"}
        shadow={"1px 2px 8px 3px black"}
        padding={'2'}
        borderRadius={"10px"}
        justifyContent={"center"}
      >
        <Heading textAlign={'center'}>Procedure</Heading>
        
        <Heading ml={"1.5%"} textAlign={'left'} fontSize={"2xl"}>
          <FontAwesomeIcon icon={faLightbulb} /> {'\t'} FCFS (First Come, First Served)
        </Heading>
        <Text
          display={"block"}
          flexDirection={"column"}
          letterSpacing={"2px"}
          fontWeight={"bold"}
          p={3}
          m={2}
        >
          <FontAwesomeIcon icon={faCircleDot} /> {'\t'}
          The First Come, First Served (FCFS) scheduling algorithm is the simplest scheduling algorithm. 
          It processes requests in the order they arrive. The first process that arrives is the first to be executed. 
          <Divider />
          <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}
          To simulate FCFS scheduling:
          <br />{'\t'}
          1. Processes are added to a queue as they arrive.
          <br />{'\t'}
          2. The process at the front of the queue is executed until it finishes.
          <br />{'\t'}
          3. The next process in the queue is then executed.
          <br />{'\t'}
          4. This continues until all processes are executed.
        </Text>
        
        <Heading ml={"1.5%"} textAlign={'left'} fontSize={"2xl"}>
          <FontAwesomeIcon icon={faLightbulb} /> {'\t'} SJF (Shortest Job First)
        </Heading>
        <Text
          display={"block"}
          flexDirection={"column"}
          letterSpacing={"2px"}
          fontWeight={"bold"}
          p={3}
          m={2}
        >
          <FontAwesomeIcon icon={faCircleDot} /> {'\t'}
          Shortest Job First (SJF) scheduling algorithm selects the process with the shortest burst time for execution. 
          It minimizes the average waiting time by processing the shortest jobs first.
          <Divider />
          <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}
          To simulate SJF scheduling:
          <br />{'\t'}
          1. Processes are sorted by their burst time in ascending order.
          <br />{'\t'}
          2. The process with the shortest burst time is executed first.
          <br />{'\t'}
          3. This continues until all processes are executed.
        </Text>

        <Heading ml={"1.5%"} textAlign={'left'} fontSize={"2xl"}>
          <FontAwesomeIcon icon={faLightbulb} /> {'\t'} SRTF (Shortest Remaining Time First)
        </Heading>
        <Text
          display={"block"}
          flexDirection={"column"}
          letterSpacing={"2px"}
          fontWeight={"bold"}
          p={3}
          m={2}
        >
          <FontAwesomeIcon icon={faCircleDot} /> {'\t'}
          Shortest Remaining Time First (SRTF) is a preemptive version of SJF. 
          It selects the process with the shortest remaining time to execute next, which can lead to preemption of currently running processes.
          <Divider />
          <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}
          To simulate SRTF scheduling:
          <br />{'\t'}
          1. At every scheduling point, the process with the shortest remaining time is selected for execution.
          <br />{'\t'}
          2. If a new process arrives with a shorter remaining time, the current process is preempted.
          <br />{'\t'}
          3. The process with the shortest remaining time continues until completion.
        </Text>

        <Heading ml={"1.5%"} textAlign={'left'} fontSize={"2xl"}>
          <FontAwesomeIcon icon={faLightbulb} /> {'\t'} Priority Preemptive
        </Heading>
        <Text
          display={"block"}
          flexDirection={"column"}
          letterSpacing={"2px"}
          fontWeight={"bold"}
          p={3}
          m={2}
        >
          <FontAwesomeIcon icon={faCircleDot} /> {'\t'}
          Priority Preemptive scheduling assigns priorities to processes and executes the highest priority process. 
          If a new process arrives with a higher priority than the currently executing process, it preempts the current process.
          <Divider />
          <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}
          To simulate Priority Preemptive scheduling:
          <br />{'\t'}
          1. Processes are assigned priorities.
          <br />{'\t'}
          2. The process with the highest priority is selected for execution.
          <br />{'\t'}
          3. If a new process arrives with a higher priority, the current process is preempted.
          <br />{'\t'}
          4. This continues until all processes are executed.
        </Text>

        <Heading ml={"1.5%"} textAlign={'left'} fontSize={"2xl"}>
          <FontAwesomeIcon icon={faLightbulb} /> {'\t'} Priority Non-Preemptive
        </Heading>
        <Text
          display={"block"}
          flexDirection={"column"}
          letterSpacing={"2px"}
          fontWeight={"bold"}
          p={3}
          m={2}
        >
          <FontAwesomeIcon icon={faCircleDot} /> {'\t'}
          Priority Non-Preemptive scheduling also assigns priorities to processes, but once a process starts executing, it runs to completion before the CPU can switch to a higher priority process.
          <Divider />
          <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}
          To simulate Priority Non-Preemptive scheduling:
          <br />{'\t'}
          1. Processes are assigned priorities.
          <br />{'\t'}
          2. The process with the highest priority is selected for execution.
          <br />{'\t'}
          3. Once a process starts executing, it runs to completion before the next process is selected.
          <br />{'\t'}
          4. This ensures that the highest priority process runs until completion before any lower priority processes are executed.
        </Text>
      </Box>
    </>
  );
}
