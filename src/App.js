import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Profile from './components/Profile'
import Posts from './components/Posts'

import AuthContext from "./store/authContext";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/auth" element={ !authCtx.token ? <Auth /> : <Navigate to="/"/>}/>
        <Route path="/posts" element={ authCtx? <Posts /> : <Navigate to="/auth"/>}/>  //TODO: Add more authCtx ternaries
        <Route path="/profile" element={ authCtx? <Profile /> : <Navigate to="/auth"/> }/>
        <Route path="*" element={ <Navigate to='/'/> }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
