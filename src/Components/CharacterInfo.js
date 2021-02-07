import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

import '../Styles/CharacterInfo.css';

export default function CharacterInfo({ match }) {
   const [character, setCharacter] = useState(null);
   const [showModal, setShowModal] = useState(false);
   const history = useHistory();

   useEffect(() => fetchCharacter(match.params.id), [match]);

   const fetchCharacter = async id => {
      try {
         const url =
            process.env.NODE_ENV === 'production'
               ? `https://dndcc-api.herokuapp.com/characters/${id}`
               : `http://localhost:4000/characters/${id}`;

         const response = await axios(url);
         setCharacter(response.data);
      } catch (error) {
         console.log(error);
      }
   };

   const handleClose = () => setShowModal(false);

   const handleDelete = async () => {
      try {
         const url =
            process.env.NODE_ENV === 'production'
               ? `https://dndcc-api.herokuapp.com/characters/${character._id}`
               : `http://localhost:4000/characters/${character._id}`;

         await axios.delete(url);
         handleClose();
         history.push('/characters');
      } catch (error) {
         console.log(error);
      }
   };

   const friendlyDate = dateString =>
      new Date(dateString).toLocaleDateString('en-US', {
         year: 'numeric',
         month: 'long',
         day: 'numeric'
      });

   return (
      character && (
         <>
            <Modal
               show={showModal}
               centered
               onHide={handleClose}
               background='static'
               keyboard={false}>
               <Modal.Header>
                  <Modal.Title>Are you sure?</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  Let ye be warned: this action cannot be undone!
               </Modal.Body>
               <Modal.Footer>
                  <Button variant='warning' onClick={handleClose}>
                     Nevermind
                  </Button>
                  <Button variant='danger' onClick={handleDelete}>
                     Yes, delete
                  </Button>
               </Modal.Footer>
            </Modal>

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
                     {character.campaign && (
                        <p>Campaign: {character.campaign}</p>
                     )}
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
                     <Button
                        variant='danger'
                        onClick={() => setShowModal(true)}>
                        DELETE
                     </Button>
                  </div>
               </Card.Footer>
            </Card>
         </>
      )
   );
}
