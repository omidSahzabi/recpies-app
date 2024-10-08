import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import './App.css';

import Navbar from './components/navbar/Navbar';
import Create from './pages/Create/Create'
import Home from './pages/Home/Home'
import Recpie from './pages/Recpie/Recepie'
import Search from './pages/Search/Search'
import ThemeSelector from './components/themeSelector/ThemeSelector';
import { useTheme } from './hooks/useTheme';


function App() {

  const {mode} = useTheme()

  return (
    <div className={`App ${mode}`}>
      <Router>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/recipes/:id' element={<Recpie />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
