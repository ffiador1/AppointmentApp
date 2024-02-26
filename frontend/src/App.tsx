import React from 'react';
import Layout from './layouts/Layout';
import {BrowserRouter as Router, 
  Route, 
  Routes, 
  Navigate,} 
  from "react-router-dom"; ;

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Layout></Layout>}> </Route>
      <Route></Route>
    </Routes>
   </Router>
  );
};

export default App
