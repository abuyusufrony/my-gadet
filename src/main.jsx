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
import Statistics from './Components/Statistics/Statistics.jsx'
import Gagets from './Components/Gadgets/Gagets.jsx'
import Gagetdetails from './Components/gagetdetails/Gagetdetails.jsx'
import Dashbord from './Components/Dashbord/Dashbord.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body></Body>,

    children: [

      {
        path: '/',
        element: <Home></Home>,
        errorElement: <Error></Error>,
      },
      {
        path: '/Gadgets',
        element: <Gagets></Gagets>


      },
      {
        path: '/Gaget/:productId',
        element: <Gagetdetails></Gagetdetails>,
        loader: () => fetch('/Data.json')
      },
      {
        path: '/Navbar',
        element: <Navbar></Navbar>
      },
      {
        path: '/Footer',
        element: <Footer></Footer>
      },
      {
        path: '/Statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/Dashbord',
        element: <Dashbord></Dashbord>
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
