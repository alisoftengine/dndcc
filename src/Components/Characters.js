import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
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

   useEffect(() => {
      const fetchCharacters = async () => {
         const charList = await axios(
            'https://dndcc-api.herokuapp.com/characters'
            // 'http://localhost:4000/characters'
         );
         setCharacters(charList.data);
      };
      fetchCharacters();
   }, []);

   const handleClose = () => setShowModal(false);

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
               <Button
                  variant='danger'
                  onClick={() => {
                     console.log(id);
                     // axios
                     //    .delete(`http://localhost:4000/characters/${id}`)
                     //    .then(() => {
                     //       handleClose();
                     //       history.push('/characters');
                     //    });
                  }}>
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
                           onClick={() =>
                              history.push(`/characters/${characterInfo._id}`)
                           }>
                           VIEW
                        </Button>

                        <Link to={`characters/${characterInfo._id}/edit`}>
                           <Button variant='dark'>EDIT</Button>
                        </Link>

                        <Button
                           variant='danger'
                           onClick={() => {
                              setId(characterInfo._id);
                              setShowModal(true);
                           }}>
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
