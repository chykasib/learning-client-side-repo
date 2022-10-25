import { RouterProvider } from 'react-router-dom';
import React from 'react';
import './App.css';
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
