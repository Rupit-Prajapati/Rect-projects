import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Filter from './Filter'
import Header from './Header';
import Temp_control from './Temp_control';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/Temp_control' element={<Temp_control />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;