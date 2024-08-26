import {
    Box, Heading, Text, List,
    ListItem,
  
    UnorderedList,
  } from '@chakra-ui/react'
  import React from 'react'
  
  export default function Team() {
    return (
      <>
  
        <Box
          display={"flex"}
          flexDirection={'column'}
          m={3}
          borderWidth={"2px"}
          shadow={"1px 2px 8px 3px black"}
          borderRadius={"20px"}
          justifyContent={"center"}
        >
          <Heading textAlign={'center'}>Team</Heading>
          <Heading fontSize={'30px'} paddingLeft={'10px'} textAlign={'left'}>Students</Heading>
          <  UnorderedList fontSize={'20px'} paddingLeft={'30px'}>
            <ListItem>S.Kanak Megha, Bsc (Hons) Computer Science Year 2023-2024</ListItem>
          </UnorderedList>
          <Heading fontSize={'30px'} paddingLeft={'10px'} textAlign={'left'}>Mentors</Heading>
          <  UnorderedList fontSize={'20px'} paddingLeft={'30px'}>
            <ListItem>Prof. Sharanjit Kaur, Department of Computer Science</ListItem>
            <ListItem>Ms. Gunjan Rani,Department of Computer Science</ListItem>
            <ListItem>Ms. Nishu Singh,Department of Computer Science</ListItem>

        
          </UnorderedList>
  
  
        </Box>
      </>
    )
  }
  