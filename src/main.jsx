import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from './components/ErrorPage';
import Root from './components/Root';
import ListedBooks from './components/LIsted Books/ListedBooks'
import PagesToRead from './components/Pages to Read/PagesToRead'
import Home from './components/Home/Home'
import BookDetails from './components/Home/Books/BookDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/listed_books",
        element: <ListedBooks />
      },

      {
        path: "/page_to_read",
        element: <PagesToRead />
      },

      {
        path: "/book_details/:id",
        element: <BookDetails />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
)
