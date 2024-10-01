import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import './App.css';

import Navbar from './components/navbar/Navbar';
import Create from './pages/Create/Create'
import Home from './pages/Home/Home'
import Recpie from './pages/Recpie/Recepie'
import Search from './pages/Search/Search'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/recpies/:id' element={<Recpie />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
