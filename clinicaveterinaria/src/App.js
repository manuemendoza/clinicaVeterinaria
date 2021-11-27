import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePet from "./pages/CreatePet/CreatePet";
import CreateUser from "./pages/CreateUser/CreateUser";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";


function App() {
  //se requiere sass, yo usaría scss para aprender a usarlo, culquier problema como el de la pasada vez me lo comentas y revisamos antes del día de presentación  , chachi estoy instalando dependias ahora pico 
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/login" element={<Login/>} exact />
            <Route path="/register" element={<CreateUser/>} exact />
            <Route path="/register/pet" element={<CreatePet/>} exact />
            <Route path="/appointment" exact />
            <Route path="/user/pet/list"  exact />
            <Route path="/user/pet" exact />
            <Route path="/admin"  exact />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
