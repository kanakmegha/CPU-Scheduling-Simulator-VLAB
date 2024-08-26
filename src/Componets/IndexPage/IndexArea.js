import React from "react";
import "./IndexArea.css";
import Aim from "./image/Aim.png";
import theory from "./image/theory.png";
import { Link } from "react-router-dom";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import image2 from "./image/teamwork_1256650.png"
export default function IndexArea() {
  return (
    <>
      <Box
        display={"flex"}
        m={3}
        flexDir={"column"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
      >
        <Heading className="heading">CPU Scheduling Algorithm</Heading>
        <Box />
      </Box>
   
        <nav className="nav">
          <Box
          display={"flex"}
          m={3}
          flexDirection={'row'}
          borderWidth={"2px"}
          borderRadius={2}
          borderColor={"white"}
          justifyContent={"center"}
          textAlign={"center"}
          w={'100px'}
          height={"100px"}

          >
            <Link className="internal_link" to={"/"}>
              <Image m={2} borderRadius={"70px"} w={'60px'} h={'60px'} src={Aim}  />  <Text>Aim</Text>
            </Link>
          </Box>
          <Box
           display={"flex"}
           m={3}
           flexDirection={'row'}
           borderWidth={"2px"}
           borderRadius={2}
           borderColor={"white"}
           justifyContent={"center"}
           textAlign={"center"}
           w={'100px'}
          h={'100px'}>
            <Link className="internal_link" to={"/theory"}>
              <Image m={2} borderRadius={"70px"} w={'60px'} h={'60px'} src={theory} alt="" className="icon" /> 
              Theory{" "}
            </Link>
          </Box>
          <Box
            display={"flex"}
            m={3}
            flexDirection={'row'}
            borderWidth={"2px"}
            borderRadius={2}
            borderColor={"white"}
            justifyContent={"center"}
            textAlign={"center"}
            w={'100px'}
           h={'100px'}>
            <Link className="internal_link" to={"/procedure"}>
              <Image  m={2} borderRadius={"70px"} w={'60px'} h={'60px'}
                src="https://cdn4.iconfinder.com/data/icons/project-management-1-11/65/23-512.png"
                alt=""
                className="icon"
              />{" "}
              
              Procedure
            </Link>
          </Box>
          <Box
            display={"flex"}
            m={3}
            flexDirection={'row'}
            borderWidth={"2px"}
            borderRadius={2}
            borderColor={"white"}
            justifyContent={"center"}
            textAlign={"center"}
            w={'100px'}
           h={'100px'}>
            <Link className="internal_link" to={"/practice"}>
              <Image m={2} borderRadius={"70px"} w={'60px'} h={'60px'}
                src="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo-animation/editable-minimal.png?v=6"
                alt=""
                className="icon"
              />
              Practice
            </Link>
          </Box>
          <Box
            display={"flex"}
            m={3}
            flexDirection={'row'}
            borderWidth={"2px"}
            borderRadius={2}
            borderColor={"white"}
            justifyContent={"center"}
            textAlign={"center"}
            w={'100px'}
           h={'100px'}>
            <Link className="internal_link" to={"/code"}>
              <Image m={2} borderRadius={"70px"} w={'60px'} h={'60px'}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/110px-Python-logo-notext.svg.png"
                alt=""
                className="icon"
              />
              Code{" "}
            </Link>
          </Box>
          <Box
            display={"flex"}
            m={3}
            flexDirection={'row'}
            borderWidth={"2px"}
            borderRadius={2}
            borderColor={"white"}
            justifyContent={"center"}
            textAlign={"center"}
            w={'100px'}
           h={'100px'}>
            <Link className="internal_link" to={"/quiz"}>
              <Image m={2} borderRadius={"70px"} w={'60px'} h={'60px'}
                src="https://img.favpng.com/21/11/8/new-york-city-fotolia-stock-photography-sales-png-favpng-f9ZiUMqBcZK0LNfZPfC674ZxZ_t.jpg"
                alt=""
                className="icon"
              />{" "}
              
              Quiz{" "}
            </Link>
          </Box>
          <Box
           display={"flex"}
           m={3}
           flexDirection={'row'}
           borderWidth={"2px"}
           borderRadius={2}
           borderColor={"white"}
           justifyContent={"center"}
           textAlign={"center"}
           w={'100px'}
          h={'100px'}>
            <Link className="internal_link" to={"/result"}>
              <Image m={2} borderRadius={"70px"} w={'60px'} h={'60px'}
                src="https://cdn4.iconfinder.com/data/icons/collection-of-online-business-icons/64/Board_Chart_Results_Business-512.png"
                alt=""
                className="icon"
              />
              Result{" "}
            </Link>
          </Box>
          <Box
            display={"flex"}
            m={3}
            flexDirection={'row'}
            borderWidth={"2px"}
            borderRadius={2}
            borderColor={"white"}
            justifyContent={"center"}
            textAlign={"center"}
            w={'100px'}
           h={'100px'}>
            <Link className="internal_link" to={"/reference"}>
              <Image m={2} borderRadius={"70px"} w={'60px'} h={'60px'}
                src="https://image.pngaaa.com/134/5592134-middle.png"
                alt=""
                className="icon"
              />
              References{" "}
            </Link>
          </Box>
          <Box
            display={"flex"}
            m={3}
            flexDirection={'row'}
            borderWidth={"2px"}
            borderRadius={2}
            borderColor={"white"}
            justifyContent={"center"}
            textAlign={"center"}
            w={'100px'}
           h={'100px'}>
            <Link className="internal_link" to={"/team"}>
              <Image m={2} borderRadius={"70px"} w={'60px'} h={'60px'}
                src={image2}
                alt=""
                className="icon"
              />
              Team{" "}
            </Link>
          </Box>
        </nav>
    </>
  );
}
