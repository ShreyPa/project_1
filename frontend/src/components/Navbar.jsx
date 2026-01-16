import React from 'react'
import { Button, Container, Flex, HStack, Link, Text, useColorMode } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { IoMoon } from 'react-icons/io5'
import { LuSun } from 'react-icons/lu'



const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()


  return (
    <div>
      <Container maxW={"1140px"} px={4} >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{
            base: "column",
            sm: "row"
          }}>

          <Text
            as={RouterLink}
            to={"/"}
            fontSize={{base: "22", sm: "26"}}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
          >
            Product Store
          </Text>

          <HStack spacing={2} alignItems={"center"}>
            <Link as={RouterLink} to={"/create"}>
              <Button>
                <PlusSquareIcon fontSize={20} />
              </Button>
            </Link>
            <Button onClick={toggleColorMode}> 
              {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
            </Button>
          </HStack>

        </Flex>
      </Container>
    </div>
  )
}

export default Navbar
