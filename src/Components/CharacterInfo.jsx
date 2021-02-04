import { useEffect, useState } from 'react';

export default function CharacterInfo({ match }) {
   const [character, setCharacter] = useState(null);
   const fetchCharacter = async id => {
      await fetch(`https://dndcc-api.herokuapp.com/characters/${id}`)
         .then(res => res.json())
         .then(res => {
            setCharacter(res);
         })
         .catch(console.error);
   };
   useEffect(() => {
      fetchCharacter(match.params.id);
   }, [match.params.id]);
   return (
      character && (
         <div>
            <h2>
               Player Name: {character.player}, Campaign: {character.campaign}
            </h2>

            <h1>Character Name: {character.name}</h1>
            <h3>Gender: {character.sex}</h3>
            <h3>Race: {character.race}</h3>
            <h3>Class: {character.class}</h3>
            <h3>Character Background: {character.background}</h3>
            <h3>Character Alignment: {character.alignment}</h3>
            <h3>Date Created: {character.created}</h3>
            <div>
               <h3>Attributes</h3>
               <h4>Strength: {character.abilities.strength}</h4>
               <h4>Dexteriy: {character.abilities.dexterity}</h4>
               <h4>Constitution: {character.abilities.constitution}</h4>
               <h4>Intelligence: {character.abilities.intelligence}</h4>
               <h4>Wisdom: {character.abilities.wisdom}</h4>
               <h4>Charisma: {character.abilities.charisma}</h4>
            </div>
         </div>
      )
   );
}
