import './scss/App.scss';
import MainLayout from 'common/components/layouts/MainLayout';
import Homepage from "pages/HomePage/Home";
import Dashboard from "pages/Dashboard/Dashboard";


import {Routes, Route } from "react-router-dom";
import Login from 'pages/Auth/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="home" element={<Homepage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  );
}

export default App;
