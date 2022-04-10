import { useSelector } from 'react-redux';
import { HashRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import InfoProducts from './components/InfoProducts';
import LoadingPage from './components/LoadingScreen';
import { Home } from './pages';

function App() {

  const isLoading = useSelector( state => state.isLoading )

  return (
    <div className="App">

      <HashRouter>
        { isLoading && <LoadingPage />}
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/infoproducts/:id' element={ <InfoProducts/> } />
        </Routes>
      </HashRouter>
  
    </div>
  );
}

export default App;
