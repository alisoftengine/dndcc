import { Navbar, Nav } from 'react-bootstrap';

export default function Navigation() {
   return (
      <Navbar variant='dark' bg='dark'>
         <Nav variant='tabs'>
            <div className='nav-bar'>
               <Nav.Item>
                  <Nav.Link href='/'>To Home</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                  <Nav.Link href='/characters'>To Characters</Nav.Link>
               </Nav.Item>
            </div>
         </Nav>
      </Navbar>
   );
}
