import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

import '../Styles/Characters.css';

export default function Characters() {
   const [characters, setCharacters] = useState([]);

   useEffect(() => {
      const fetchCharacters = async () => {
         const charList = await axios(
            'https://dndcc-api.herokuapp.com/characters'
         );
         setCharacters(charList.data);
      };
      fetchCharacters();
   }, []);

   return (
      <ListGroup>
         {characters.map(characterInfo => {
            return (
               <ListGroup.Item key={characterInfo._id} className='character'>
                  <p className='character-name'>{characterInfo.name}</p>
                  <div className='controls'>
                     <Button className='view-button' variant='success'>
                        VIEW
                     </Button>
                     <Button className='edit-button' variant='dark'>
                        EDIT
                     </Button>
                     <Button className='delete-button' variant='danger'>
                        DELETE
                     </Button>
                  </div>
               </ListGroup.Item>
            );
         })}
      </ListGroup>
   );
}
