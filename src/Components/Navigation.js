import { Navbar, Nav } from 'react-bootstrap';
import '../Styles/Navigation.css';

export default function Navigation() {
   return (
      <div className='navigation'>
         <Navbar variant='dark' bg='dark' className='justify-content-center'>
            <Nav variant='tabs'>
               <div className='container-fluid' id='links'>
                  <ul className='navbar-nav'>
                     <Nav.Item className='nav-item'>
                        <Nav.Link href='/'>To Home</Nav.Link>
                     </Nav.Item>
                     <Nav.Item className='nav-item'>
                        <Nav.Link href='/characters'>To Characters</Nav.Link>
                     </Nav.Item>
                  </ul>
               </div>
            </Nav>
         </Navbar>
      </div>
   );
}
