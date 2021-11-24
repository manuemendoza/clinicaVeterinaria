import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";


function App() {
  //se requiere sass, yo usaría scss para aprender a usarlo, culquier problema como el de la pasada vez me lo comentas y revisamos antes del día de presentación  , chachi estoy instalando dependias ahora pico 
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/login" exact />
            <Route path="/register" exact />
            <Route path="/register/pet"  exact />
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
