import React from 'react'
import "../../App.css";
import { Box, Heading } from '@chakra-ui/react';


export default function Result() {
  return (
    <>
   
    <Box 
    display={"flex"}
    m={3}
    p={8}
    flexDir={'column'}
    borderWidth={"2px"}
    shadow={"1px 2px 8px 3px black"}
    borderRadius={"20px"}
    justifyContent={"center"}
    alignContent={"center"}
    alignItems={"center"}>
      <Heading>Result</Heading>
        <Heading size="md">CPU Scheduling Algorithm algorithm , implemented using simulation is efficient and easy to understand.</Heading>
    </Box>
    </>
  )
}
