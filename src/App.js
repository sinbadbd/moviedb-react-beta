import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/index'
import Home from './components/Home';

const App = () => {
  return (
     <div className="App">
       <Header />
      
       <Home />
     </div>
  );
}

export default App;
