
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Rootlayout from "./components/Layouts/Rootlayout";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Rootlayout/>}>
          <Route index element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Route>

     
      </Routes>
    </>
  );
}

export default App;
