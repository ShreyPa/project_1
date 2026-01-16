import { Box, useColorModeValue } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import Navbar from './components/Navbar.jsx'
import React from "react";

function App() {
  const bg = useColorModeValue('gray.100', 'gray.900')
  const color = useColorModeValue('gray.900', 'gray.100')

  return (
    <Box
      minH={"100vh"}
      bg={bg}
      color={color}
    >
      <Navbar />
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/create" element = {<CreatePage />} />
      </Routes>
    </Box>
    )
}

export default App
