import "./App.css"
// import "animate.css/animate.min.css"
import Card from "./componets/Card"
// import Install from "./componets/Install"
import Login from "./page/Login"
import Signup from "./page/Signup"
import Account from "./page/Account"
import Home from "./page/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthContextProvider } from "./contexts/AuthContext"
import Protected from "./componets/Protected"


function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route path="/account" 
          element={
                    <Protected >
                  <Account/>
                    </Protected>
                  }
          />
                                                
        {/* <Route  path="/in" element={<Install/>}/> */}
        <Route path="/ex" element={<Card/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
     
        <Route exact path="/" element={<Home/>}/>

          
     
      </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
