import { useState } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Game from './components/Game';
import Scores from './components/Scores';

// CSS Styles
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  //początkowa wartość użytkowania ma na początku wartość null//
  //funkcja będzie nam zmieniać zmienną w trakcie wykonywania kodu//
  //ten user będzie nam potrzebny w innych jeszcze komponentach///

  return (
    <div className='App'>
      <Navbar />
      <Route path='/scores' exact>
        <Scores data={{ user }} />
      </Route>
      <Route path='/game' exact>
        <Game data={{ user }} />
      </Route>
      <Route path='/' exact>
        <Home data={{ user, setUser }} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
