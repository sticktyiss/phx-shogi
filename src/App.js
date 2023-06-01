import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Auth from './components/Auth'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        
        <Route path='/auth'  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
