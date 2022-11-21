import "./App.css"
import "animate.css/animate.min.css"
import Card from "./componets/Card"
import Install from "./componets/Install"
import Login from "./page/Login"
import Signup from "./page/Signup"
import Account from "./page/Account"
import Home from "./page/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthContextProvider } from "./contexts/AuthContext"


function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>


        <Route exact path="/" element={<Install/>}/>
        <Route path="/ex" element={<Card/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Account" element={<Account/>}/>
        <Route path="/Home" element={<Home/>}/>
        
      </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
