import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/header/index'
import Home from './components/Home';
import Movie from './components/Movie';
import ActorProfile from './components/Actor-Profile/index'
import NotFound from './components/NotFound';


const App = () => {
  return (
     <Router>
       <Header />
       <Routes>
         
          <Route path='/' element={ <Home />} />
          <Route path='/movie/:movieId' element={ <Movie /> } />
          <Route path='/actor/:actorId' element={ <ActorProfile /> } />
          <Route path='/*' element={ <NotFound />} />
        </Routes>  
     </Router>
  );
}

export default App;
