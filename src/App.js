import './App.css';
import Header from './Components/Header';
import { Route } from 'react-router-dom';

function App() {
   return (
      <div className='App'>
         <Header />
         <main>
            <Route path='/'>To Home</Route>
            <Route path='/characters'>To Characters</Route>
         </main>
      </div>
   );
}

export default App;
