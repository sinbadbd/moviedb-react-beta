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
import Footer from './Footer';
import UpComming from './components/Movie/UpComming';
import TopRated from './components/Movie/TopRated';
import NowPlaing from './components/Movie/NowPlaing';

const App = () => {
  return (
     <Router>
       <Header />
       <Routes>
         
          <Route path='/' element={ <Home />} />
          <Route path='/movie/:movieId' element={ <Movie /> } />
          <Route path='/actor/:actorId' element={ <ActorProfile /> } />
          <Route path='/upcomming' element={ <UpComming/>} />
          <Route path='/toprated' element={ <TopRated /> } />
          <Route path='/nowplay' element={ <NowPlaing /> } />
          <Route path='/*' element={ <NotFound />} />
        </Routes> 
        <Footer /> 
     </Router>
  );
}

export default App;
