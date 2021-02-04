import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Characters() {
   const [characters, setCharacters] = useState([]);
   const fetchCharacters = async () => {
      await fetch('https://dndcc-api.herokuapp.com/characters')
         .then(res => res.json())
         .then(res => {
            setCharacters(res);
         })
         .catch(console.error);
   };
   useEffect(() => {
      fetchCharacters();
   }, []);

   return (
      <section>
         {characters &&
            characters.map(characterInfo => {
               return (
                  <Link to={`/characters/${characterInfo._id}`}>
                     {characterInfo.name}
                  </Link>
               );
            })}
      </section>
   );
}
