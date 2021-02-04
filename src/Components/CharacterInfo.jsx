import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

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
         <Card>
            <Card.Body>
               <Card.Header>
                  <h1>Character Name: {character.name}</h1>
               </Card.Header>
               <Card.Title>
                  <div className='inlineDisplay'>
                     {character.player ? (
                        <h2>Player Name: {character.player} </h2>
                     ) : null}
                     {character.campaign ? (
                        <h2>Campaign: {character.campaign} </h2>
                     ) : null}
                  </div>
               </Card.Title>
               <Card.Text>
                  <h3>Gender: {character.sex}</h3>
                  <h3>Race: {character.race}</h3>
                  <h3>Class: {character.class}</h3>
                  <h3>Character Background: {character.background}</h3>
                  <h3>Character Alignment: {character.alignment}</h3>
               </Card.Text>
               <div className='attributes'>
                  <Card.Subtitle>
                     <h3>Attributes</h3>
                  </Card.Subtitle>
                  <Card.Text>
                     <h4>Strength: {character.abilities.strength}</h4>
                     <h4>Dexteriy: {character.abilities.dexterity}</h4>
                     <h4>Constitution: {character.abilities.constitution}</h4>
                     <h4>Intelligence: {character.abilities.intelligence}</h4>
                     <h4>Wisdom: {character.abilities.wisdom}</h4>
                     <h4>Charisma: {character.abilities.charisma}</h4>
                  </Card.Text>
               </div>
               <Card.Footer as='h6'>
                  <h3>Date Created: {character.created}</h3>
               </Card.Footer>
            </Card.Body>
         </Card>
      )
   );
}
