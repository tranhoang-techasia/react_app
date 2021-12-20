import './scss/App.scss';
import MainLayout from 'common/components/layouts/MainLayout';
import Homepage from "pages/HomePage/Home";
import Dashboard from "pages/Dashboard/Dashboard";
import Counter from "pages/Counter";
import Notify from "pages/Notify";
import NotifyDetail from "pages/Notify/Detail";
import Logout from 'pages/Auth/Logout';
import Login from 'pages/Auth/Login';
import {Routes, Route } from "react-router-dom";





function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="home" element={<Homepage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="counter" element={<Counter />} />
        
        <Route path="notify">
          <Route path="" element={<Notify />} />
          <Route path="detail" element={<NotifyDetail />} />
        </Route>

        <Route path="user" element={<Counter />} >
          <Route path="detail" element={<Counter />} />
        </Route>

      </Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>
    </Routes>
  );
}

export default App;
