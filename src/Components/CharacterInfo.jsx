import CharactersData from '../character-seed.json';

export default function CharacterInfo() {
   return (
      <div>
         {CharactersData.map(character => {
            return (
               <div>
                  <h1>Campaign: {character.campaign}</h1>
                  <h3>
                     Adventurer: {character.name}({character.player}),{' '}
                     {character.sex}
                  </h3>

                  <p>
                     Personality: A {character.alignment} {character.background}
                  </p>

                  <h3>Attributes</h3>
                  <h4>Strength: {character.abilities.strength}</h4>
                  <h4>Dexterity: {character.abilities.dexterity}</h4>
                  <h4>Constitution: {character.abilities.constitution}</h4>
                  <h4>Intelligence: {character.abilities.intelligence}</h4>
                  <h4>Wisdom: {character.abilities.wisdom}</h4>
                  <h4>Charisma: {character.abilities.charisma}</h4>
               </div>
            );
         })}
      </div>
   );
}
