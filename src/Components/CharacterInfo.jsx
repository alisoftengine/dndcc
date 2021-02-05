import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Table } from 'react-bootstrap';

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
            <Card>
               <Card.Body>
                  <Card.Header>
                     <Card.Title>
                        <div className='inlineDisplay'>
                           {character.player ? (
                              <h3>Player: {character.player} </h3>
                           ) : null}
                           {character.campaign ? (
                              <h3>Campaign: {character.campaign} </h3>
                           ) : null}
                        </div>
                     </Card.Title>
                  </Card.Header>
                  <Card.Text>
                     <h4>
                        Hero: {character.name} ({character.sex})
                     </h4>
                     <p>
                        A {character.background} {character.race}{' '}
                        {character.class} ({character.alignment}).
                     </p>
                  </Card.Text>
                  <div className='attributes'>
                     <Card.Subtitle className='attribute-title'>
                        <h4>Attributes</h4>
                     </Card.Subtitle>
                     <Table
                        striped
                        bordered
                        hover
                        size='sm'
                        className='attribute-table'>
                        <tbody>
                           <tr>
                              <td>Strength</td>
                              <td>{character.abilities.strength}</td>
                           </tr>
                           <tr>
                              <td>Dexteriy</td>
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
                  </div>
                  <Card.Footer as='h6'>
                     <p>Date Created: {character.created}</p>
                     <Link
                        to={`/characters/edit/${character._id}`}
                        key={character._id}>
                        Edit {character.name}
                     </Link>
                  </Card.Footer>
               </Card.Body>
            </Card>
         </div>
      )
   );
}
