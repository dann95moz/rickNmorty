import './App.css';
import Navbar from './components/header/drawerAppBar';
import { Routes,Route} from 'react-router-dom';
import { HomeComponent } from './components/routes/home/home';
import { CharactersComponent } from './components/routes/characters/characters';
import { EpisodesComponent } from './components/routes/episodes/episodes';
import { LocationsComponent } from './components/routes/locations/locations';


function App() {

  
  
  
  return (
    
    <div className='App'>
     
      <Navbar />
      <Routes>
        <Route path="*" Component={HomeComponent} />
        <Route path="/characters" Component={CharactersComponent} />
        <Route path="/episodes" Component={EpisodesComponent} />
        <Route path="/locations" Component={LocationsComponent} />
     
      </Routes>
 



    </div>
  
  );
}

export default App;
