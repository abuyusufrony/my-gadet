import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home/Home.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Error from './Components/Error/Error.jsx'
import Body from './Components/Body/Body.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body></Body>,
    errorElement: <Error></Error>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/Navbar',
        element: <Navbar></Navbar>
      },
      {
        path: '/Footer',
        element: <Footer></Footer>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <RouterProvider router={router}>

    </RouterProvider>


  </StrictMode>,
)
