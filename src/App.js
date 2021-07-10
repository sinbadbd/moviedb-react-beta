import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/header/index'
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';


const App = () => {
  return (
     <Router>
       <Header />
       <Routes>
         
          <Route path='/' element={ <Home />} />
          <Route path='/:movieId' element={ <Movie /> } />
          <Route path='/*' element={ <NotFound />} />
        </Routes>  
     </Router>
  );
}

export default App;
