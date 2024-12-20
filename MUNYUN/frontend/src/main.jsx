import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);


// import * as React from 'react'
// import { ChakraProvider } from '@chakra-ui/react'
// import * as ReactDOM from 'react-dom/client'
// import App from './App.jsx';

// const rootElement = document.getElementById('root')
// ReactDOM.createRoot(rootElement).render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>,
// )