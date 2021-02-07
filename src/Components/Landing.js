import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

import '../Styles/Landing.css';

export default function Landing() {
   const initCharacter = {
      player: '',
      campaign: '',
      name: '',
      sex: '',
      race: '',
      class: '',
      background: '',
      alignment: '',
      abilities: {
         strength: '',
         dexterity: '',
         constitution: '',
         intelligence: '',
         wisdom: '',
         charisma: ''
      }
   };

   const [character, setCharacter] = useState(initCharacter);
   const [showModal, setShowModal] = useState(false);
   const history = useHistory();

   // static creation options
   // TODO move these to a collection on the server and request them on render
   const sexes = ['male', 'female'];
   const races = [
      'human',
      'hill dwarf',
      'mountain dwarf',
      'high elf',
      'wood elf',
      'lightfoot halfling',
      'stout halfling'
   ];
   const classes = [
      'cleric',
      'strong fighter',
      'quick fighter',
      'rogue',
      'wizard'
   ];
   const backgrounds = [
      'acolyte',
      'criminal',
      'folk hero',
      'noble',
      'sage',
      'soldier'
   ];
   const alignments = [
      'lawful good',
      'neutral good',
      'chaotic good',
      'lawful neutral',
      'neutral neutral',
      'chaotic neutral',
      'lawful evil',
      'neutral evil',
      'chaotic evil'
   ];
   const abilities = [
      'strength',
      'dexterity',
      'constitution',
      'intelligence',
      'wisdom',
      'charisma'
   ];

   const toTitleCase = string =>
      string
         .split(' ')
         .map(word => word[0].toUpperCase().concat(word.slice(1)))
         .join(' ');

   // make sure our data validates against our schema before sending it over
   // if certain fields are missing, randomly choose them
   function validateSubmit() {
      const sample = array => array[Math.floor(Math.random() * array.length)];

      character.sex = character.sex || sample(sexes);
      character.race = character.race || sample(races);
      character.class = character.class || sample(classes);
      character.background = character.background || sample(backgrounds);
      character.alignment = character.alignment || sample(alignments);

      validateAbilities();
   }

   // abilities need special consideration
   function validateAbilities() {
      // this gives our valid range of ability point scores [3, 18]
      const sample = () => Math.floor(Math.random() * 16) + 3;

      character.abilities = character.abilities || {};

      abilities.forEach(
         ability =>
            (character.abilities[ability] =
               character.abilities[ability] || sample())
      );
   }

   function handleChange(event) {
      setCharacter({ ...character, [event.target.name]: event.target.value });
   }

   function handleAbilityChange(event) {
      setCharacter({
         ...character,
         abilities: {
            ...character.abilities,
            [event.target.name]: Number(event.target.value)
         }
      });
   }

   function handleSubmit(event) {
      event.preventDefault();

      // character names are REQUIRED in our schema
      // force the user to give the character a name before they can submit
      if (!character.name || character.name === '') {
         setShowModal(true);
         return;
      }

      validateSubmit();
      postCharacter().then(id => history.push(`/characters/${id}`));
   }

   async function postCharacter() {
      const url = 'https://dndcc-api.herokuapp.com/characters';
      const headers = { 'Content-Type': 'application/json' };

      try {
         const response = await axios.post(url, character, {
            headers: headers
         });
         return response.data._id;
      } catch (error) {
         console.error(error);
      }
   }

   return (
      <div className='create-form-container'>
         <Modal show={showModal} background='static' keyboard='false'>
            <Modal.Header>
               <Modal.Title>Invalid character name</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               Please give your character a valid name. Empty names are invalid.
               Close this dialog, and try again.
            </Modal.Body>
            <Modal.Footer>
               <Button variant='secondary' onClick={() => setShowModal(false)}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>

         <Form className='create-form' onSubmit={handleSubmit}>
            <h3 className='create-header'>Create your Character</h3>
            <Form.Text>
               Enter the character name and hit submit
               <br />
               for a randomly generated character.
            </Form.Text>

            <Form.Group className='name-container'>
               <Form.Label>Player</Form.Label>
               <Form.Control
                  type='text'
                  placeholder='Enter your name'
                  name='player'
                  value={character.player}
                  onChange={handleChange}
               />
            </Form.Group>

            <Form.Group className='name-container'>
               <Form.Label>Campaign</Form.Label>
               <Form.Control
                  type='text'
                  placeholder='Enter campaign name'
                  name='campaign'
                  value={character.campaign}
                  onChange={handleChange}
               />
            </Form.Group>

            <Form.Group className='character-name-container name-container'>
               <Form.Label>Character</Form.Label>
               <Form.Control
                  type='text'
                  placeholder='Enter character name'
                  name='name'
                  value={character.name}
                  onChange={handleChange}
               />
               <Badge className='required' variant='danger'>
                  REQUIRED
               </Badge>
            </Form.Group>

            <Form.Group className='sex-container'>
               <Form.Label>Sex</Form.Label>
               <div className='sex-options'>
                  {sexes.map(sex => (
                     <Form.Check
                        inline
                        key={sex}
                        label={toTitleCase(sex)}
                        type='radio'
                        name='sex'
                        value={sex}
                        checked={character.sex === sex}
                        onChange={handleChange}
                     />
                  ))}
               </div>
            </Form.Group>

            <Form.Group className='dropdown-container'>
               <Form.Label>Race</Form.Label>
               <select
                  name='race'
                  defaultValue={character.race || 'select'}
                  onChange={handleChange}>
                  <option value='select' disabled hidden>
                     Choose your race
                  </option>
                  {races.map(race => (
                     <option key={race} value={race}>
                        {toTitleCase(race)}
                     </option>
                  ))}
               </select>
            </Form.Group>

            <Form.Group className='dropdown-container'>
               <Form.Label>Class</Form.Label>
               <select
                  name='class'
                  defaultValue={character.class || 'select'}
                  onChange={handleChange}>
                  <option value='select' disabled hidden>
                     Choose your class
                  </option>
                  {classes.map(classString => (
                     <option key={classString} value={classString}>
                        {toTitleCase(classString)}
                     </option>
                  ))}
               </select>
            </Form.Group>

            <Form.Group className='dropdown-container'>
               <Form.Label>Background</Form.Label>
               <select
                  name='background'
                  defaultValue={character.background || 'select'}
                  onChange={handleChange}>
                  <option value='select' disabled hidden>
                     Choose your background
                  </option>
                  {backgrounds.map(background => (
                     <option key={background} value={background}>
                        {toTitleCase(background)}
                     </option>
                  ))}
               </select>
            </Form.Group>

            <Form.Group className='dropdown-container'>
               <Form.Label>Alignment</Form.Label>
               <select
                  name='alignment'
                  defaultValue={character.alignment || 'select'}
                  onChange={handleChange}>
                  <option value='select' disabled hidden>
                     Choose your alignment
                  </option>
                  {alignments.map(alignment => (
                     <option key={alignment} value={alignment}>
                        {toTitleCase(alignment)}
                     </option>
                  ))}
               </select>
            </Form.Group>

            {abilities.map(ability => (
               <Form.Group key={ability} className='range-container'>
                  <div className='stat-container'>
                     <Form.Label>{toTitleCase(ability)}</Form.Label>
                     <Badge>{character.abilities[ability] || '??'}</Badge>
                  </div>
                  <Form.Control
                     type='range'
                     name={ability}
                     min='3'
                     max='18'
                     value={character.abilities[ability]}
                     onChange={handleAbilityChange}
                  />
               </Form.Group>
            ))}

            <Button type='submit' variant='success'>
               SUBMIT
            </Button>
         </Form>
      </div>
   );
}
