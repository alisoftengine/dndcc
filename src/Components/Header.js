import Navigation from './Navigation';
import { Jumbotron } from 'react-bootstrap';
import '../Styles/Header.css';

export default function Header() {
   return (
      <Jumbotron>
         <div className='container-fluid'>
            <div className='header'>
               <h1>Dungeons & Dragons Character Creator</h1>
            </div>
            <Navigation />
         </div>
      </Jumbotron>
   );
}

//need color scheme and font foe header
