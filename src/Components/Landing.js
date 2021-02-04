import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Landing() {
   const [character, setCharacter] = useState({});

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
      console.log(character);
   }

   return (
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
            <Form.Check
               inline
               label='Male'
               type='radio'
               name='sex'
               value='male'
               onChange={handleChange}
            />
            <Form.Check
               inline
               label='Female'
               type='radio'
               name='sex'
               value='female'
               onChange={handleChange}
            />
         </Form.Group>

         <Form.Group>
            <Form.Label>Race:</Form.Label>
            <select name='race' defaultValue='select' onChange={handleChange}>
               <option value='select' disabled hidden>
                  Choose your race
               </option>
               <option value='human'>Human</option>
               <option value='hill dwarf'>Hill Dwarf</option>
               <option value='mountain dwarf'>Mountain Dwarf</option>
               <option value='high elf'>High Elf</option>
               <option value='wood elf'>Wood Elf</option>
               <option value='lightfoot halfling'>Lightfoot Halfling</option>
               <option value='stout halfling'>Stout Halfling</option>
            </select>
         </Form.Group>

         <Form.Group>
            <Form.Label>Class:</Form.Label>
            <select name='class' defaultValue='select' onChange={handleChange}>
               <option value='select' disabled hidden>
                  Choose your class
               </option>
               <option value='cleric'>Cleric</option>
               <option value='strong fighter'>Strong Fighter</option>
               <option value='quick fighter'>Quick Fighter</option>
               <option value='rogue'>Rogue</option>
               <option value='wizard'>Wizard</option>
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
               <option value='acolyte'>Acolyte</option>
               <option value='criminal'>Criminal</option>
               <option value='folk hero'>Folk Hero</option>
               <option value='noble'>Noble</option>
               <option value='sage'>Sage</option>
               <option value='soldier'>Soldier</option>
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
               <option value='lawful good'>Lawful Good</option>
               <option value='neutral good'>Neutral Good</option>
               <option value='chaotic good'>Chaotic Good</option>
               <option value='lawful neutral'>Lawful Neutral</option>
               <option value='neutral neutral'>Neutral Neutral</option>
               <option value='chaotic neutral'>Chaotic Neutral</option>
               <option value='lawful evil'>Lawful Evil</option>
               <option value='neutral evil'>Neutral Evil</option>
               <option value='chaotic evil'>Chaotic Evil</option>
            </select>
         </Form.Group>

         <Form.Group>
            <Form.Label>Strength:</Form.Label>
            <Form.Control
               type='range'
               name='strength'
               min='3'
               max='18'
               onChange={handleAbilityChange}
            />
         </Form.Group>

         <Form.Group>
            <Form.Label>Dexterity:</Form.Label>
            <Form.Control
               type='range'
               name='dexterity'
               min='3'
               max='18'
               onChange={handleAbilityChange}
            />
         </Form.Group>

         <Form.Group>
            <Form.Label>Constitution:</Form.Label>
            <Form.Control
               type='range'
               name='constitution'
               min='3'
               max='18'
               onChange={handleAbilityChange}
            />
         </Form.Group>

         <Form.Group>
            <Form.Label>Intelligence:</Form.Label>
            <Form.Control
               type='range'
               name='intelligence'
               min='3'
               max='18'
               onChange={handleAbilityChange}
            />
         </Form.Group>

         <Form.Group>
            <Form.Label>Wisdom:</Form.Label>
            <Form.Control
               type='range'
               name='wisdom'
               min='3'
               max='18'
               onChange={handleAbilityChange}
            />
         </Form.Group>

         <Form.Group>
            <Form.Label>Charisma:</Form.Label>
            <Form.Control
               type='range'
               name='charisma'
               min='3'
               max='18'
               onChange={handleAbilityChange}
            />
         </Form.Group>

         <Button type='submit' variant='primary'>
            Submit
         </Button>
      </Form>
   );
}
