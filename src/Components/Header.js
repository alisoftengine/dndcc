import Navigation from './Navigation';
import '../Styles/Header.css';

export default function Header() {
   return (
      <header>
         <h1 className='title-banner'>
            <span>
               DUNGEONS
               <br />
               &DRAGONS
            </span>
            <span>Character Creator</span>
         </h1>
         <Navigation />
      </header>
   );
}

//need color scheme and font foe header
