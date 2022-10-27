import { RouterProvider } from 'react-router-dom';
import React from 'react';
import './App.css';
import { router } from './Routes/Routes/Routes';

function App() {

  return (
    <>

      <RouterProvider router={router}></RouterProvider>

    </>
  );
}

export default App;
