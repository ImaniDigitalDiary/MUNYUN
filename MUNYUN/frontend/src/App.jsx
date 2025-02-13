import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box, useColorModeValue } from '@chakra-ui/react'

// PAGES
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import ExpensePage from './pages/ExpensePage'
import ZeroBased from './pages/ZeroBased'

import '../src/index.css'

// COMPONENTS
import Navbar from './components/Navbar'



function App(addNewCategory) {
  return (
    <Box className='appCont' height={'100vh'} bg={useColorModeValue('gray.100', 'gray.900')}>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/view-expenses' element={<ExpensePage />} />
        <Route path='/zero-based' element={<ZeroBased />}/>
        <Route path='/create' element={<CreatePage onExpenseCreate={addNewCategory}/>} />
      </Routes>
      
  </Box>
  )
}

export default App
