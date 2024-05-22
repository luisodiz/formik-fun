import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import SignInPage from './pages/SignInPage/SignInPage.tsx'
import SignUpPage from './pages/SignUpPage/SignUpPage.tsx'
import './index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignInPage />,
    index: true,
  },
  {
    path: 'sign-up',
    element: <SignUpPage />,
  },
  {
    path: 'sign-in',
    element: <SignInPage />,
  },
])

const App = () => <RouterProvider router={router} />

export default App
