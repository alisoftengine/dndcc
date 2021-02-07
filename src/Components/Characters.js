import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

import '../Styles/Characters.css';

export default function Characters() {
   const [characters, setCharacters] = useState([]);
   const [id, setId] = useState();
   const [showModal, setShowModal] = useState(false);
   const history = useHistory();

   useEffect(() => fetchCharacters(), []);

   const fetchCharacters = async () => {
      try {
         const url =
            process.env.NODE_ENV === 'production'
               ? 'https://dndcc-api.herokuapp.com/characters'
               : 'http://localhost:4000/characters';

         const charList = await axios(url);
         setCharacters(charList.data);
      } catch (error) {
         console.log(error);
      }
   };

   const handleClose = () => setShowModal(false);

   const handleView = id => history.push(`/characters/${id}`);

   const promptDelete = id => {
      setId(id);
      setShowModal(true);
   };

   const handleDelete = async () => {
      try {
         const url =
            process.env.NODE_ENV === 'production'
               ? `https://dndcc-api.herokuapp.com/characters/${id}`
               : `http://localhost:4000/characters/${id}`;

         await axios.delete(url);
         fetchCharacters();
         handleClose();
      } catch (error) {
         console.log(error);
      }
   };

   return (
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

         <ListGroup>
            {characters.map(characterInfo => {
               return (
                  <ListGroup.Item key={characterInfo._id} className='character'>
                     <p className='character-name'>{characterInfo.name}</p>
                     <div className='controls'>
                        <Button
                           variant='success'
                           onClick={() => handleView(characterInfo._id)}>
                           VIEW
                        </Button>
                        <Button variant='dark'>EDIT</Button>
                        <Button
                           variant='danger'
                           onClick={() => promptDelete(characterInfo._id)}>
                           DELETE
                        </Button>
                     </div>
                  </ListGroup.Item>
               );
            })}
         </ListGroup>
      </>
   );
}
