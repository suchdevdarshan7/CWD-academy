import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Movies from './components/Movies.jsx'
import Movie from './components/Movie.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom' 

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  
 {
    path:'/Movie',
    element:<Movies />

  },
  {
    path:'/Movie/:slug',
    element:<Movie />
  }
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
