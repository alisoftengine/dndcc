# GA-SEI-Project-Three

## Dungeons and Dragons Character Creator (DnDCC)

#### SEI: 1130, Project Three

#### Scrum Master: Keenan Ward

#### Git Master: Fahim Ali

#### Code Monkey: Joachim Canete

## Welcome

Welcome to the **Dungeons and Dragons Character Creator (DnDCC)**! This web-app is a one stop shop for quickly and efficiently creating a Dungeons and Dragons (DnD) character. [Dungeons And Dragons](https://en.wikipedia.org/wiki/Dungeons_%26_Dragons) is a fantasy tabletop role-playing game (RPG) originally released in **1974**, designed by Dave Arnerson and Gary Gygax. Over the course of _almost half a century_, **DnD** has evolved through 5 editions, each incorporating unique elements and gameplay integrated into **DnD's** timeless RPG theme. **DnDCC** was developed by **Keenan Ward**, **Fahim Ali**, and **Joachim Cañete**.

## About

**DnDCC** was written in `React` and incorporates the usage of `JavaScript` and `CSS` with dependencies managed via `npm` . While `React` operates on the front-end, `MongoDB` operates in the back-end alongside `Express` and `Mongoose`.

You can view the **(DnDCC)** [HERE](https://dndcc.herokuapp.com/)!

## Deployment

**(DnDCC)** Was deployed through [Heroku](https://www.heroku.com/), a publishing platform for interactive web-apps.

## Interaction

Upon visting **DnDCC**, the user will be presented with the **Character Create** page which features the character creation event. The user can enter their desired character information in the various input fields, then click the **"Submit"** button at the bottom of the page. However, the only field _required_ for character submission is the **Character Name**. The **Player Name** and **Campaign Name** can remain empty while all other fields will generate random attributes. All information can be edited later in the **Character Edit** page.

![creation_page2](https://i.imgur.com/u5Sqbnl.png)

When the initial character information has been submitted, the use will be routed to the **Character Information** page, which will feature the information provided by the user or randomly generated upon submission.

![character_information2](https://i.imgur.com/kErQRKU.png)

At the bottom of the page, the user will be presented with options to either edit or delete their character. Should the user decided to delete their character, the may do so by clicking the **"Delete"** button. A modal will pop up and provide the user with a final warning to confirmation character deletion, as doing so will _permanently_ delete the character. Successful character deletion will route the character to the **Character Selection** page.

![character_deletion](https://i.imgur.com/eRQi4SR.png)

At any point in time, the user may enter the **Character Create** and **Character Selection** pages by accessing them through the _navigation bar_. Selecting **"Home"** will route the user back to the character creation event, while selecting **"Characters"** will route the user to the selection screen. The **Character Selection** page will present all the characters created by global users. Form this page, any character may be _viewed_, _edited_, or _deleted_ via their aptly named buttons. Clicking on these buttons will route the user to the **Character Information** page, the **Character Edit** page, or the **Deletion Warning** modal, respectively.

![character_selection2](https://i.imgur.com/bSyk6dP.png)

## Development

**DnDCC**'s functionality was built to accomodate **full CRUD** services, allowing it's users to _create_, _read_, _update_, and _delete_ information available in the web-app. using `React` to host the front-end components, a component hierarchy was mapped out to focus on allowing for the user's ease of use and navigation. Routing the user from **Character Create** to **Character View** with an ever-present navigation bar that provided a route to **Character Selection** made for an intuitive design.

_Back-end_ scaffolding was built to provide the _front-end_ with **RESTful API** functionality. Utilizing `MongoDB` to create and store this information, API calls were made in the **Character Select**, **Character View**, and **Character Edit** components to render consistent information across all characters created.

![component_hierarchy](https://i.imgur.com/rlaoV7u.png)

The initial conceptualization of the **DnDCC** was inspired by the original _first edition_ **DnD** [character sheet](https://i.pinimg.com/originals/c8/9f/b3/c89fb37b4b355b6bf443a9bbb80e2fbe.jpg). Taking into consideration that many of the elements present on the character sheet were intended for _in-game_ use, the **Character Create** page prioritized basic player and character information to be submitted. Later renditions of the character creation event would incorporate responsive designs.

![character_create1](https://i.imgur.com/qXdFZF4.png)

A first-draft wireframe for the **Character View** page incorporated many of the elements of character information referenced in the _first-edition_ character sheet, but the amount of information was unconducive to a **mobile-first** approach, so elements intended for _in-game_ use were not included.

![character_sheet](https://i.imgur.com/ib5uCTK.png)

## User Stories

- [x] As a player, I want to model a character quickly and easily.
- [x] As a player, I want to input my name.
- [x] As a player, I want to input the campaign name.
- [x] As a player, I want to input the character’s name.
- [x] As a player, I want to choose the character’s sex.
- [x] As a player, I want to choose from the basic races.
- [x] As a player, I want to choose from the basic classes.
- [x] As a player, I would like to choose my ability point loadout (APL).
- [x] As a player, I want to choose from the basic backgrounds.
- [x] As a player, I want to choose from the nine alignments.
- [x] As a player, I want to peruse custom character loadouts that other people have created.
