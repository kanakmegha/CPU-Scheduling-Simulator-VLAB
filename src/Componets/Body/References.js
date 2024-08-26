import {
  Box, Heading, Text, List,
  ListItem,

  UnorderedList,
} from '@chakra-ui/react'
import React from 'react'

export default function References() {
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
        <Heading textAlign={'center'}>References</Heading>
        <Heading fontSize={'30px'} paddingLeft={'10px'} textAlign={'left'}>References</Heading>

        <Text fontSize={"xl"} p={2}>React book: Learning React: A Hands-On Guide <br />Chinnathambi, Kirupa. Learning React: a hands-on guide to building web applications using React and Redux. Addison-Wesley Professional, 2018. </Text>
        <Text fontSize={"xl"} p={2}>React book: React in Action <br />Larsen, John. React Hooks in Action: With Suspense and Concurrent Mode. Simon and Schuster, 2021. </Text>
        <Text fontSize={"xl"} p={2}>Dhamdhere, D. M. (2006). Operating Systems: A Concept-based Approach. 2nd edition. Tata McGraw-Hill. Education</Text>
        <Heading fontSize={'30px'} paddingLeft={'10px'} textAlign={'left'}>Tools</Heading>
        <  UnorderedList fontSize={'20px'} paddingLeft={'30px'}>
          <ListItem>React JS</ListItem>
          <ListItem>VS Code</ListItem>
      
        </UnorderedList>


      </Box>
    </>
  )
}
