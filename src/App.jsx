import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage/index";
import { LoginPage } from "./pages/LoginPage/index";
import { RegisterPage } from "./pages/RegisterPage/index";

import { Global } from "./styles/global";

function App() {

  return (
    <>
      <Global/>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </>
  )
}

export default App;
