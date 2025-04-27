import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Homepage.jsx';
import Album from './pages/Albumpage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/album/:albumId",
        element: <Album />,
      },
    ],
  },
]);

const root =createRoot(document.getElementById("root"));
root.render(

  <StrictMode>
    
    
    <RouterProvider router={router} />
  
  
  </StrictMode>
);