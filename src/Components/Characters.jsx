import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';
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
      <section>
         {characters &&
            characters.map(characterInfo => {
               return (
                  <ListGroup variant='flush'>
                     <ListGroup.Item>
                        <div className='character'>
                           <li className='list-group-item'>
                              <span className='character-name'>
                                 {characterInfo.name}
                              </span>
                              <Link
                                 className='character-link'
                                 to={`/characters/${characterInfo._id}`}
                                 key={characterInfo._id}>
                                 <button
                                    type='button'
                                    className='btn btn-outline-dark btn-sm'
                                    id='view-button'>
                                    View Character
                                 </button>
                              </Link>
                           </li>
                        </div>
                     </ListGroup.Item>
                  </ListGroup>
               );
            })}
      </section>
   );
}
