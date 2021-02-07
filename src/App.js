import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Characters from './Components/Characters';
import CharacterInfo from './Components/CharacterInfo';
import CharacterEdit from './Components/CharacterEdit';

function App() {
   return (
      <div className='App'>
         <Header />
         <main>
            <Switch>
               <Route
                  exact
                  path='/characters/:id'
                  render={routerProps => (
                     <CharacterInfo match={routerProps.match} />
                  )}
               />
               <Route
                  exact
                  path='/characters/:id/edit'
                  render={routerProps => (
                     <CharacterEdit match={routerProps.match} />
                  )}
               />
               <Route exact path='/characters' render={() => <Characters />} />
               <Route exact path='/' render={() => <Landing />} />
            </Switch>
         </main>
      </div>
   );
}
export default App;
