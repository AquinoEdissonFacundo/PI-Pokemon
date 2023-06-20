import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './componentes/landing/landing';
import Home from './componentes/Home/Home';
import CreatePokemons from './componentes/CreatePokemons/CreatePokemons'
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/pokemons/createPokemons' element={<CreatePokemons />} />
          <Route path="/" element={<Landing />} />
          <Route exact path='/home' element= {<Home />} />

      </Routes>
    </div>
  );
};

export default App;
