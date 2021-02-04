import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Landing() {
   const [character, setCharacter] = useState({});
   const [showModal, setShowModal] = useState(false);

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
            [event.target.name]: event.target.value
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
      console.log(character);
   }

   return (
      <div className='creator-form-container'>
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

         <Form className='creator' onSubmit={handleSubmit}>
            <Form.Group>
               <Form.Label>Player:</Form.Label>
               <Form.Control
                  type='text'
                  placeholder='Enter your name'
                  name='player'
                  onChange={handleChange}
               />
            </Form.Group>

            <Form.Group>
               <Form.Label>Campaign:</Form.Label>
               <Form.Control
                  type='text'
                  placeholder='Enter campaign name'
                  name='campaign'
                  onChange={handleChange}
               />
            </Form.Group>

            <Form.Group>
               <Form.Label>Character:</Form.Label>
               <Form.Control
                  type='text'
                  placeholder='Enter character name'
                  name='name'
                  onChange={handleChange}
               />
            </Form.Group>

            <Form.Group>
               {sexes.map(sex => (
                  <Form.Check
                     inline
                     key={sex}
                     label={toTitleCase(sex)}
                     type='radio'
                     name='sex'
                     value={sex}
                  />
               ))}
            </Form.Group>

            <Form.Group>
               <Form.Label>Race:</Form.Label>
               <select
                  name='race'
                  defaultValue='select'
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

            <Form.Group>
               <Form.Label>Class:</Form.Label>
               <select
                  name='class'
                  defaultValue='select'
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

            <Form.Group>
               <Form.Label>Background:</Form.Label>
               <select
                  name='background'
                  defaultValue='select'
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

            <Form.Group>
               <Form.Label>Alignment:</Form.Label>
               <select
                  name='alignment'
                  defaultValue='select'
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
               <Form.Group key={ability}>
                  <Form.Label>{toTitleCase(ability)}:</Form.Label>
                  <Form.Control
                     type='range'
                     name={ability}
                     min='3'
                     max='18'
                     onChange={handleAbilityChange}
                  />
               </Form.Group>
            ))}

            <Button type='submit' variant='primary'>
               Submit
            </Button>
         </Form>
      </div>
   );
}
