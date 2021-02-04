import './App.css';
import { Route } from 'react-router-dom';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Characters from './Components/Characters';
import CharacterInfo from './Components/CharacterInfo';

function App() {
   return (
      <div className='App'>
         <Header />
         <main>
            <Route path='/' render={() => <Landing />} />
            <Route exact path='/characters' render={() => <Characters />} />
            <Route
               exact
               path='/characters/:id'
               render={routerProps => (
                  <CharacterInfo match={routerProps.match} />
               )}
            />
         </main>
      </div>
   );
}
// <Route exact path='/characters/:id' render={(routerProps) => <CharacterDetails match={routerProps.match}/>}/>
export default App;
