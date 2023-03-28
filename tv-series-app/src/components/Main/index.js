import React from 'react';
import { Route, Routes } from "react-router-dom"
import Series from '../../containers/Series';
import SingleSeries from '../../containers/SingleSeries';

const Main = props => {
    return (
        <Routes>
          <Route path="/" element={<Series />} />
          <Route path="/series/:id" element={<SingleSeries />} />          
        </Routes>
      )
}

export default Main;