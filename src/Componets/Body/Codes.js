import React, { useState } from "react";
import "./Body.css";
import {  Box, Button, Center,  Text } from "@chakra-ui/react";
import { languages } from "./CodeFile";


export default function Codes() {
 
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <>
      <Box>
        <Box
          m={3}
          display={"flex"}
          borderWidth={"2px"}
          flexDir={"colume"}
          shadow={"1px 2px 8px 3px black"}
          borderRadius={"20px"}
            
          justifyContent={"center"}
        >  
          {languages.map((language) => (
            <Button
              colorScheme={"pink"}
              m={3}
              key={language.name}
              onClick={() => handleLanguageClick(language)}
            >
              {language.name}
            </Button>
          ))}
        </Box>
      </Box>
      {selectedLanguage && (
        <Box
          display={"flex"}
          borderWidth={"2px"}
          flexDirection={"colume"}
         shadow={"1px 2px 8px 3px black"}
          borderRadius={"20px"}
            mr={2}
          // justifyContent={"center"}
          p={5}
          m={3}
        >
          <pre>
            <Text
              display={"Flex"}
              flexDirection={"column"}
              alignItems={"center"}
              letterSpacing={"2px"}
              fontWeight={"bold"}
              p={5}
              m={3}
              _hover={{ color: "blue" }}
            >
              {selectedLanguage.code}
            </Text>
          </pre>
        </Box>
      )}
    <Center>{selectedLanguage?(<Button colorScheme="pink" onClick={()=>{navigator.clipboard.writeText(selectedLanguage.code)}} >Copy the Code</Button>):""}</Center>
      <Box
        display={"block"}
        borderWidth={"2px"}
        flexDirection={"colume"}
       shadow={"1px 2px 8px 3px black"}
        borderRadius={"20px"}
          
        justifyContent={"center"}
        p={5}
        m={3}
      >
        <Text
          display={"Flex"}
          flexDirection={"column"}
          alignItems={"center"}
          letterSpacing={"2px"}
          fontWeight={"bold"}
          colorScheme="pink"
        >
          {" "}
          Copy Code from the above Textarea and run in below Online IDE
        </Text>
        {selectedLanguage ? (
          <iframe
            height="450px"
            src={
              selectedLanguage
                ? `https://onecompiler.com/embed/${selectedLanguage.name}`
                : `https://onecompiler.com/embed/c++`
            }
            hideLanguageSelection="true"
            width="100%"
          />
        ) : (
          ""
        )}
      </Box>
      {/* {console.log(languages.name)} */}
    </>
  );
}
