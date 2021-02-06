import { Navbar, Nav } from 'react-bootstrap';
import '../Styles/Navigation.css';

export default function Navigation() {
   return (
      <Navbar className='justify-content-center'>
         <Nav variant='tabs'>
            <Nav.Item>
               <Nav.Link href='/'>HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link href='/characters'>CHARACTERS</Nav.Link>
            </Nav.Item>
         </Nav>
      </Navbar>
   );
}
