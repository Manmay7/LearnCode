import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DefaultPage from './Pages/defaultPage';
import PassCodeChallenge from './Pages/PassCodeChallenge';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/default" />} />
        <Route path="/default" element={<DefaultPage />} />
        <Route path="/pass" element={<PassCodeChallenge />} />
      </Routes>
     </Router> 
    </>
  );
}

export default App;
