import React from 'react';
import PokemonsList from "./PokemonsList";
import Pokemon from './Pokemon';
import Fight from './Fight';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Alert, AlertIcon } from "@chakra-ui/react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path = "/" element={<PokemonsList/>} />
          <Route path = "/pokemon/:id" element={<Pokemon/>} />
          <Route path = "/fight" element={<Fight/>} />
        </Routes>
      </div>
    </BrowserRouter>
  ) 
}

export default App;

//before version

// function App() {
//   return (
//     <div className="App">
//       <PokemonsList/>
//     </div>
//   );
// }