import './App.css';
import { Route } from 'react-router-dom';
import Header from './Components/Header';
import Landing from './Components/Landing';

function App() {
   return (
      <div className='App'>
         <Header />
         <main>
            <Route path='/' render={() => <Landing />} />
            <Route path='/characters'>To Characters</Route>
         </main>
      </div>
   );
}

export default App;
