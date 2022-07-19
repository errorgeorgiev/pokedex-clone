import React from 'react';
import PokemonsList from "./pages/PokemonsList";
import Pokemon from './pages/Pokemon';
import Fight from './pages/Fight';
import CustomButton from './components/CustomButton';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path = "/" element={<PokemonsList/>} />
          <Route path = "/:id" element={<Pokemon/>} />
          <Route path = "/fight" element={<Fight/>} />
          <Route path = "/button" element={<CustomButton/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  ) 
}

export default App;
