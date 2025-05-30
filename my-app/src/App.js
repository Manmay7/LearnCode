import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DefaultPage from './Pages/defaultPage';
import PassCodeChallenge from './Pages/PassCodeChallenge';
import CustomTimer from './Pages/CustomTimer';
import AutoCompleteForm from './Pages/AutoCompleteForm';
import ToDoList from './Pages/ToDoList';

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/default" />} />
        <Route path="/timer" element={<CustomTimer />}/>
        <Route path="/default" element={<DefaultPage />} />
        <Route path="/pass" element={<PassCodeChallenge />} />
        <Route path='/auto' element={<AutoCompleteForm/>}/>
        <Route path='/todo' element={<ToDoList/>}/>
      </Routes>
    </Router>
  );
};

export default App;
