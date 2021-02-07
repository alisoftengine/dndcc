import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

import '../Styles/CharacterInfo.css';

export default function CharacterInfo({ match }) {
   const [character, setCharacter] = useState(null);

   const fetchCharacter = async id => {
      try {
         const response = await axios(
            `https://dndcc-api.herokuapp.com/characters/${id}`
         );
         return response.data;
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchCharacter(match.params.id).then(data => setCharacter(data));
   }, [match.params.id]);

   const friendlyDate = dateString =>
      new Date(dateString).toLocaleDateString('en-US', {
         year: 'numeric',
         month: 'long',
         day: 'numeric'
      });

   return (
      character && (
         <Card className='character-card'>
            <Card.Header>
               <p className='character-name'>{character.name}</p>
            </Card.Header>
            <Card.Body>
               <Card.Title>
                  A {character.sex} {character.race} {character.class} of{' '}
                  {character.background} origins ({character.alignment}).
               </Card.Title>
               <Card.Subtitle className='optional-info'>
                  {character.player && <p>Creator: {character.player}</p>}
                  {character.campaign && <p>Campaign: {character.campaign}</p>}
               </Card.Subtitle>
               <Table
                  striped
                  hover
                  size='sm'
                  variant='dark'
                  className='attribute-table'>
                  <thead>
                     <tr className='ability-header'>
                        <th>Ability</th>
                        <th>Score</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>Strength</td>
                        <td>{character.abilities.strength}</td>
                     </tr>
                     <tr>
                        <td>Dexterity</td>
                        <td>{character.abilities.dexterity}</td>
                     </tr>
                     <tr>
                        <td>Constitution</td>
                        <td>{character.abilities.constitution}</td>
                     </tr>
                     <tr>
                        <td>Intelligence</td>
                        <td>{character.abilities.intelligence}</td>
                     </tr>
                     <tr>
                        <td>Wisdom</td>
                        <td>{character.abilities.wisdom}</td>
                     </tr>
                     <tr>
                        <td>Charisma</td>
                        <td>{character.abilities.charisma}</td>
                     </tr>
                  </tbody>
               </Table>
            </Card.Body>
            <Card.Footer>
               <p>Created on {friendlyDate(character.created)}</p>
               <div className='controls'>
                  <Button variant='dark'>EDIT</Button>
                  <Button variant='danger'>DELETE</Button>
               </div>
            </Card.Footer>
         </Card>
      )
   );
}
