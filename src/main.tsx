import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {createTheme, ThemeProvider} from '@mui/material'
import '@fontsource/source-sans-pro'

import Root from './routes/Root.tsx'
import Home from './routes/Home.tsx'
import SignIn from './routes/SignIn.tsx'
import SignUp from './routes/SignUp.tsx'
import './index.scss'

const theme = createTheme({
  typography: {
    fontFamily: '"Source Sans Pro", sans-serif',
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
