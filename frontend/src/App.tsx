//import React from 'react';
import Layout from './layouts/Layout';
import {BrowserRouter as Router, 
  Route, 
  Routes, } 
  from "react-router-dom"; ;

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Layout>
        <p>Home Page</p>
      </Layout>}> </Route>
      <Route></Route>
    </Routes>
   </Router>
  );
};

export default App
