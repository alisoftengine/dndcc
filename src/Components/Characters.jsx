import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
                  <Link
                     to={`/characters/${characterInfo._id}`}
                     key={characterInfo._id}>
                     {characterInfo.name}
                  </Link>
               );
            })}
      </section>
   );
}
