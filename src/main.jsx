import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBook from './Components/ListedBook/ListedBook';
import PageToRead from './Components/Page-To-Red/PageToRead';
import BookDetails from './Components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>

      },
      {
        path:'/listedBook',
        element:<ListedBook></ListedBook>

      },

      {
        path:'/pageToRed',
        element:<PageToRead></PageToRead>
      },
      {
        path:'/book/:bookId',
        element:<BookDetails></BookDetails>,
        loader: () => fetch('../public/data.json')
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
