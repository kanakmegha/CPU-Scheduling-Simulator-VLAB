import React from "react";
import "./Body.css";
import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faCircleDot } from "@fortawesome/free-solid-svg-icons";

export default function Theory() {
  return (
    <>
      <Box
        display={"flex"}
        m={3}
        flexDir={'column'}
        borderWidth={"2px"}
        shadow={"1px 2px 8px 3px black"}
        borderRadius={"20px"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
      >
        <Heading>Theory</Heading>
        <Text
          display={"block"}
          alignItems={"center"}
          letterSpacing={"2px"}
          fontWeight={"bold"}
          p={3}
          m={2}
        >
          <FontAwesomeIcon icon={faCircleDot} /> {'\t'}{'\t'}
          CPU scheduling is a fundamental concept in operating systems, responsible for determining which process runs at any given time. Effective CPU scheduling optimizes resource utilization and ensures that all processes receive fair and efficient execution. This virtual lab focuses on simulating and understanding five key CPU scheduling algorithms: First Come First Served (FCFS), Shortest Job First (SJF), Shortest Remaining Time First (SRTF), Priority Preemptive, and Priority Non-Preemptive.
          <Divider />

          <Heading size="md" mt={4}>1. First Come First Served (FCFS)</Heading>
          <Text ml={"2%"}>
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Principle:</strong> Processes are executed in the order they arrive in the ready queue.
            <br />
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Queue Type:</strong> FIFO (First In First Out).
            <br />
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Advantages:</strong> Simple to implement and understand.
            <br />
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Disadvantages:</strong> Can cause the "convoy effect," where shorter processes wait for a longer process to finish, leading to high average waiting time.
            <br />
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Example:</strong> If processes arrive in the order: P1 (24ms), P2 (3ms), P3 (3ms), they will be executed in this order regardless of their burst times, potentially leading to inefficient CPU utilization.
          </Text>
          <Divider />

          <Heading size="md" mt={4}>2. Shortest Job First (SJF)</Heading>
          <Text ml={"2%"}>
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Principle:</strong> Processes are executed in order of their burst times, with the shortest burst time going first.
            <br />
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Types:</strong> Can be non-preemptive (SJF) or preemptive (SRTF).
            <br />
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Advantages:</strong> Minimizes average waiting time and turnaround time.
            <br />
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Disadvantages:</strong> Difficult to predict the burst time of a process, can lead to starvation of longer processes.
            <br />
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Example:</strong> If processes arrive with burst times: P1 (6ms), P2 (2ms), P3 (8ms), P4 (3ms), the order of execution will be: P2, P4, P1, P3.
          </Text>
          <Divider />

          <Heading size="md" mt={4}>3. Shortest Remaining Time First (SRTF)</Heading>
          <Text ml={"2%"}>
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Principle:</strong> A preemptive version of SJF where the process with the shortest remaining burst time is executed next.
            <br />
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Advantages:</strong> Reduces average waiting time and turnaround time further compared to non-preemptive SJF.
            <br />
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Disadvantages:</strong> Requires frequent context switching, can lead to high overhead.
            <br />
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Example:</strong> If a new process arrives with a shorter burst time than the currently running process, the CPU will switch to the new process. For instance, if P1 (10ms) is running and P2 (4ms) arrives, the CPU will switch to P2.
          </Text>
          <Divider />

          <Heading size="md" mt={4}>4. Priority Scheduling (Preemptive)</Heading>
          <Text ml={"2%"}>
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Principle:</strong> Processes are assigned priorities, and the process with the highest priority is executed first.
            <br />
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Preemptive Nature:</strong> If a higher-priority process arrives, it preempts the currently running process.
            <br />
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Advantages:</strong> Ensures important processes are executed first.
            <br />
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Disadvantages:</strong> Can lead to starvation of low-priority processes.
            <br />
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Example:</strong> If processes have priorities: P1 (priority 2), P2 (priority 1), P3 (priority 3), the execution order will be: P3, P1, P2.
          </Text>
          <Divider />

          <Heading size="md" mt={4}>5. Priority Scheduling (Non-Preemptive)</Heading>
          <Text ml={"2%"}>
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Principle:</strong> Similar to preemptive priority scheduling but does not preempt the running process.
            <br />
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Advantages:</strong> Simpler to implement than preemptive priority scheduling.
            <br />
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Disadvantages:</strong> Can still lead to starvation of low-priority processes, higher-priority processes must wait until the current process completes.
            <br />
            <FontAwesomeIcon icon={faArrowCircleRight} /> {'\t'}{'\t'}
            <strong>Example:</strong> If processes have priorities: P1 (priority 3), P2 (priority 1), P3 (priority 2), and P1 is currently executing, P2 and P3 will wait until P1 completes, even if they have higher priorities.
          </Text>
        </Text>
      </Box>
    </>
  );
}
