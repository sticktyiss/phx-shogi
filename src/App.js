import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Auth from "./components/Auth";

import AuthContext from "./store/authContext";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/auth" element={ authCtx.token ? <Auth signedIn={true} /> : <Auth signedIn={false} /> }/>
        <Route path="*" element={ <Navigate to='/'/> }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
