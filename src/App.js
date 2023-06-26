import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Learn from "./components/Learn";
import Posts from './components/Posts'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="/learn" element={ <Learn /> } />
        <Route path="/news" element={ <Posts /> } />
        <Route path="*" element={ <Navigate to='/'/> }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
