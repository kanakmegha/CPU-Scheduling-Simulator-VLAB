import React from "react";
import "./Body.css";
import image from "../../image/CPUScheduling.png";
import { Box, Center, Heading, Image } from "@chakra-ui/react";

export default function Body() {
  return (
    <Box>
      <section id="exp">
        
        <Box
          display={"flex"}
          flexDir={'column'}
          m={3}
          borderWidth={"2px"}
          shadow={"1px 2px 8px 3px black"}
          textAlign={'center'}
          borderRadius={"20px"}
          justifyContent={"center"}
        >
          <Heading >Aim: Demonstrating CPU Scheduling Algorithms using Simulation</Heading>
          <Center><Image w={'480px'} src={image} alt="" /></Center>
        </Box>
      </section>
      
    </Box>
  );
}
