import { Link } from 'react-router-dom';

export default function Nav() {
   return (
      <div className='nav-bar'>
         <h4>NAV GOES HERE</h4>
         <ul className='nav-links'>
            <li>
               <Link to='/'>To Home</Link>
            </li>
            <li>
               <Link to='/characters'>To Characters</Link>
            </li>
         </ul>
      </div>
   );
}
