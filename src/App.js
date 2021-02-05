import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Characters from './Components/Characters';
import CharacterInfo from './Components/CharacterInfo';

function App() {
   return (
      <div className='App'>
         <Header />
         <main>
            <Switch>
               <Route
                  path='/characters/:id'
                  render={routerProps => (
                     <CharacterInfo match={routerProps.match} />
                  )}
               />
               <Route path='/characters' render={() => <Characters />} />
               <Route path='/' render={() => <Landing />} />
            </Switch>
         </main>
      </div>
   );
}
export default App;
