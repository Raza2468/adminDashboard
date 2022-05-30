import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './Pages/Login/Login';
import Home from './component/Home';




export default function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<App />}> */}
            <Route index element={<Login />} />
            <Route path='/Home' element={<Home />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>

      {/* <Home /> */}
    </>
  );
}

