import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box, useColorModeValue } from '@chakra-ui/react'
import CreatePage from './pages/CreatePage'
import ExpensePage from './pages/ExpensePage'
import Navbar from './components/Navbar'
import ZeroBased from './pages/ZeroBased'


function App(addNewCategory) {
  return (
    <Box minH={'100vh'} bg={useColorModeValue('gray.100', 'gray.900')}>
      <Navbar />
      <Routes>
        <Route path='/view-expenses' element={<ExpensePage />} />
        <Route path='/zero-based' element={<ZeroBased />}/>
        <Route path='/create' element={<CreatePage onExpenseCreate={addNewCategory}/>} />
      </Routes>
      
  </Box>
  )
}

export default App
