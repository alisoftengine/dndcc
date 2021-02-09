import '../Styles/About.css';

export default function About() {
   return (
      <div className='about-info'>
         <h1>Welcome!</h1>
         <p>Welcome to the Dungeons and Dragons Character Creator!</p>
         <p>
            To create your character, enter in your character's information in
            the specified fields. While you may modify your characters various
            attributes as you'd like, you are only required to enter in your
            character's name in order to proceed with submission. All unmodified
            fields will be filled in with random inputs, save for the Player
            Name and Campaign Name fields - both of which may be edited later.
         </p>
         <p>
            Upon submitting your character, you may peruse the other characters
            created on the Character Selection page. Here, all created
            characters can be viewed for further inspection of their attributes.
            In addition, selecting "Edit" will allow for you to edit the
            respective character's information! Should you so choose, you may
            also delete a specific characer. However, this action is permanent
            and cannot be undone.
         </p>
      </div>
   );
}
