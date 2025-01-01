import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box, useColorModeValue } from '@chakra-ui/react'
import CreatePage from './pages/CreatePage'
import ExpensePage from './pages/ExpensePage'
import Navbar from './components/Navbar'

function App() {
  return (
    <Box minH={'100vh'} bg={useColorModeValue('gray.100', 'gray.900')}>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<ExpensePage />} /> */}
        <Route path='/create' element={<CreatePage />} />
      </Routes>
      
  </Box>
  )
}

export default App
