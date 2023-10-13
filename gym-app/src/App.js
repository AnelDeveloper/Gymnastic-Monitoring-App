import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import React from 'react';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchUsers } from "./redux/user/actions";
import Applications from './pages/Applications/Applications';
import NavHeader from './components/Headers/NavHeader';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  },[]);


  return (
    <div>
    <NavHeader/>
    <Routes>
    <Route path="/" exact element={<Applications/>} />
  </Routes>
  </div>

  );
}
export default App;