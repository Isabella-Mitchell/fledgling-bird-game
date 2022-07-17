# Fledgling Website 

## Milestone Project 2 - Interactive Front-End Site 

* Fledgling is an interactive website with the purpose of engaging people in birdwatching. It features a bird identification game, and it allows the user to generate lists of recent viewings local to an address they provide. The website has a clean, responsive design and playful illustrations, which make it visually appealing and functional on any device. 

* This is my Milestone Project 2 submission for Code Institute's Diploma in Web Application Development course. My website features three pages and is built using technologies that I have learnt including HTML, CSS and JavaScript. 

## Live Project 

[View the live project here.](https://isabella-mitchell.github.io/fledgling-bird-game/)

## Repository

[Find the project repository here](https://github.com/Isabella-Mitchell/fledgling-bird-game)

# Table of Contents  

# User Experience

## User stories

### Novice Bird Watcher

*These are users who have never or rarely ever engaged in bird watching. They are aware of the concept but do not have any knowledge of bird identification techniques and can only identify a few common British birds.*

* As a novice bird watcher, I would like to play a bird identification game so to learn about bird-watching in an engaging way. 
* As a novice bird watcher, I would like to be inspired by pleasing visuals and fun facts about birds.
* As a novice bird watcher, I would like to see whether there have been any bird sightings near me recently. 
* As a novice bird watcher, I would like to see the location where these birds have been sighted, so that I can learn of places where I could go bird spotting. 
* As a novice bird watcher, I would like all the terms used to be common knowledge and not specialist.

### Intermediate/ Advanced Bird Watchers 

*These are users who already engage in bird watching. They know bird identification techniques and can identify several or many common British birds. These users may also be international and not know common British birds.*

* As an intermediate/ advanced bird watcher, I would like to be engaged through pleasing illustrations. 
* As an intermediate/ advanced bird watcher, I would like to see the names of bird sightings near me, plus locations, dates and number observed. 
* As an intermediate/ advanced bird watcher, I would like to know where the bird watching data is sourced from. 
* As an intermediate/ advanced bird watcher who is not familiar with British birds, I would like to learn about a few common British birds. 

### Game Users

*These is anyone playing the game, no matter their bird watching experience level*

* As a game user, I would like to know my score, so I can replay and beat it. 
* As a game user, I would like indication of whether I am right or wrong. 
* As a game user, I would like the game to be playable on any device. 

### Business Owners 

*These are the owners of the website*

* As the business owner, I want my website to be accessible and user-friendly on any device. 
* As the business owner, I want to provide links to other websites where the user can learn more about bird watching and bird sightings. 
* As the business owner, I want my website to feature links to my social media channels. 

## Design

### Colour Scheme

- A simple colour scheme has been used. The website aesthetic mirrors that of a book; the background is plain white which allows the colour illustrations and dark typography to stand out. 

- The footer and nav bar share a background colour which is in keeping with the palette yet distinguishes these sections from the rest of the page. 

- I used the [Material Design Colour Tool](https://material.io/resources/color/#!/?view.left=0&view.right=0) to decide on colour choices. 

### Typography

- Headings are in Baskervville and normal text is in Verdana. Baskervvile is a refined serif font which adds personality to the website. Verdana is an easily readable sans-serif font frequently used for websites and applications. Fallback fonts of Serif and Sans-serif have been used for Headings and normal text respectively in case the fonts cannot be imported into the site correctly. 

- I chose to use Baskervville in lower case for the website title, on the landing page and in the footer, as I feel this softens the font and makes it more friendly. 

### Imagery and Aesthetics 

- Imagery is an important part of gameplay. I created a series of digital illustrations to be used in the game. They are all 550x550 pixels, and the content is approximately the same size and style, so they look coherent. I have used transitions so that the images fade in and out gently with the game content. This helps make the gameplay feel gentle and engaging, which the hand-drawn illustrations give the game a human touch. 

- I also created a GIF for the main landing page, which hints at the content of the game. All images were compressed before use on the website. 

### Icons 

- I used icons from Font Awesome as score indicators during each game round. They turn green or red depending on whether the user gets a question right or wrong. 

# Wireframes (To add)

# Features

## Landing Page Features

### Centered Landing Page Format with Buttons

- I decided to use a centered landing page format as I wanted this page to be clean and have a strong impact.  

- The landing page displays the website title ‘Fledgling’ and a compelling Call To Action; ‘hone your bird watching skills’. 

- For this reason, I have not also included a navigation bar on this page. Instead, there are large, eye-catching buttons to the two other website pages are present in the center of the page.  

### Footer (Same on all pages)

- The footer that appears on the Landing Page is the same as every other page on the website, which helps keep the website consistent.  

- The footer features the website title and also a description, to give the user a clearer sense of the purpose of the website; ‘An interactive website designed to engage people in birdwatching’. 

- The footer also features social media links and copyright information. 

## Game Features

### Nav Bar

- The nav bar is the same colour as the footer, helping to frame the page and keep the website looking simple and consistent. The website title links back to the landing page. 

- When the user first loads the game, the How To Play button appears next to the Start Game button, so they can clearly see it before they start the game, especially when using a smaller device. 

- Once the user starts the game, the How To Play button moves into the top navigation, so they can access it during gameplay without loosing their progress. 

- On smaller device sizes, the Nav Bar becomes a drop-down menu, which makes it compact while it remains user friendly. I created this using Bootstrap. 

- *add sightings button?*

### How To Play Modal

- I decided to put the game instructions into a modal so that the user could access them anytime during gameplay without losing their progress. I created this using Bootstrap. 

- The information presented is concise and bullet-pointed for easy reading. There is a close button at the top and the bottom of the modal, so the user can exit easily on any device size. 

### Start Game Screen 

- This is the screen that loads when the game page is first loaded or refreshed. When the player clicks Start Game, then the game begins.  

- The purpose of the game is to correctly answer questions to identify the 5 birds outlined. 

### Round Screen 

- This is the appearance of the page at the start of each round. 

- There are 5 rounds, 1 for each bird. To start a round, the user selects the bird they would like to identify and clicks “Select”. 

- The ‘selected’ bird is framed by a green border. 

- The Select button only becomes live when the user selects a bird. The user cannot select more than one bird at once. This means the user cannot break the game. 

- The user cannot select a bird they have already completed, which means the user must attempt every bird once before the game ends. 

 ### Turn Screen 

- There will be 4 turns in each round. During each turn, the image of the bird changes, and there is a multiple-choice question about the new image shown. 

-The questions run through features commonly used for bird identification, e.g. size, colour, habitat and other distinctive features. 

- For each turn, the user must select the answer they think best matches the image shown and click “Submit”. 

- The selected answer is framed by a dark black border. 

- If the user tries to click submit before they have selected an answer option, then there will be an alert. 

- After each turn, the success indicator icons will change colour, depending on whether they got the question right or wrong. 

### End of Round Screen 

- Once the user has completed the round, they will get shown their score the round, and the bird’s identity will be revealed. 

- Depending on how well they did, they will get a different feedback message. This suggests that if they did well that round, then they definitely saw that bird and congratulated on correctly identifing it. However, if they didn’t do well, then they ‘might’ have seen that bird and can’t be confident in their identification. This is like birdwatching in reality. 

- There is also a fun fact shared about the bird, to entertain and educate the user. 

- The user can then press ‘Continue’, and they will return to the Round screen to complete the next bird. The bird they have completed is now identified, and you can see the full illustration on the round screen. 

### End Of Game Screen 

- Once the user has completed the final round, all the birds will be identified and their overall score for the game will be shown. 

- Depending on how well they did, they will get a different message. If they did well, then they are congratulated. If they did not do well, then it is suggested they could play again and improve their score. 

- The user can then choose to play again to beat their score, or else move to the bird sightings page. 

## Sightings Screen 

### Nav Bar 

- The nav bar is consistent with that shown on the Game Screen. The website title links back to the landing page. 

- There is a Learn More button in the nav bar. This provides the user with more information on where the bird sightings data is from, and further birdwatching resources. 

- On smaller device sizes, the Nav Bar becomes a drop-down menu, which makes it compact while it remains user friendly. I created this using Bootstrap. 

- *add game button? 

### Learn More Modal 

- I decided to put information about the sightings Data into a modal so that the user could access it anytime during their sightings searches without losing their current search. I created this using Bootstrap. 

- The information presented is concise and bullet-pointed for easy reading. There is a close button at the top and the bottom of the modal, so the user can exit easily on any device size. 

- It was important to me to clearly credit eBird, as they do important work which anyone can get involved with, and their API allowed me to pull bird sighting data into my website. I also thought it important to link to further birdwatching resources, e.g. the RSPB website, as this is a great resource to learn more about birdwatching beyond the scope of my project. 

### Page Title 

- This makes it clear to the user what the search bar does. I originally imagined the user looking for sightings close to where they live. However, I wanted to keep it clear that you can look for sightings anywhere in the world (where the data is available). 

- The title also includes a link to eBird, which makes the credit obvious for users on smaller screen sizes, when the ‘Learn More’ button goes into the drop-down menu. 

### Local Bird Sightings List 

- The user enters an address (street address, area, town, state or city), and selects a distance radius between 5 and 50 kilometers then presses Submit.  

- I use the Google Geocoding API to turn the address provided into coordinates. These are then passed into the eBird API, along with the selected distance radius, to provide a list of recent local bird sightings. 

- Bird Sighting data is returned, with the most recent sightings first. The data shown includes the bird name, the location observed, the number observed (where applicable) and the date/ time the observation was made. 

- I chose these columns as I felt they would be most relevant to the user. The columns nearest to the left I feel are the most important. By limiting the data to four columns and prioritising their order, it is easier to read and view on a smaller device size. 

- The location observed name is important as I believe this will resonate most with novice birdwatchers, who may not recognise the bird names, but may recognise the names of places close to them where birds have been observed. I truncated this to 30 characters, so most place names should fit, but the table will not be distorted by extremely long place names. 

- The search also returns the formatted address used in the search. This makes it clear to the user the address which is being used in the search. So, it is clear if they have incorrectly entered it. 

- Add error? 

## Features Left to Implement 

# Technologies Used

## Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)

- [CSS3](https://en.wikipedia.org/wiki/CSS)

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Frameworks Libraries and Programs

- [Bootstrap 4](https://getbootstrap.com/) 
  - I used bootstrap throughout the site to make it responsive. The website uses Bootstrap's Containers, Grid System, Flexbox, display proporties and spacing utilites. I sourced code from the Bootstrap documentation when building the Navbar, Modals, Buttons and Form.

- [jQuery](https://jquery.com/)
  - I used jQuery to reduce the amount of code I needed to manipulate the DOM in the game. jQuery is also used by Bootstrap.

- [Google Fonts](https://fonts.google.com/)
  - One font was imported from google fonts. Baskervville for the headings.
  
- [Font awesome](https://fontawesome.com/)
  - I used icons from font awesome to create the round score indicators and social media icons.

- [Git](https://git-scm.com/)
  - Git was used as a version control in the terminal.

- [Github](https://github.com/)
  - Github was used to create and store the project repository.

- [Gitpod](https://gitpod.io/)
  - Gitpod was used to create my files and where I wrote the code.

- [Balsamiq](https://balsamiq.com/)
  - Balsamiq was used to create Wireframes for the project during the initial planning stage.

- [Techsini](https://techsini.com/multi-mockup/)
  - Techsini was used to help check responsiveness and take screenshots of the page at different screen sizes.

- [Material Design Colour Tool](https://material.io/resources/color/#!/?view.left=0&view.right=0)
  - Material Design's Colour Tool was used to help decide on the colour palette of the website.

- [Procreate](https://procreate.art/)
  - Procreate was used to create the digital illustrations.

- [Adobe Photoshop](https://www.adobe.com/ie/products/photoshop.html)
  - Photoshop was used to resize images for the website and create the gif.

- [TinyPNG](https://tinypng.com/)
  - TinyPNG was used to compress images for a faster loading time.

- [WebFormatter](https://webformatter.com/html)
  - WebFormatter was used to help beautify the code.

- [Google Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)
  - Google Chrome's Dev Tools were used while building the project to test responsiveness and for debugging.

## Application Programming Interface (API's)

- [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding)
    - I used Google's Geocoding API to turn the provided address into coordinates.

- [eBird API](https://www.programmableweb.com/api/ebird)
    - The eBird API returns recent bird sighting data local to the coordinates provided. 

# Testing
- Please refer TO DO for more information on testing of the fledgling website.

# Deployment

## GitHub Pages

The project was deployed to GitHub Pages using these steps:

1. Log in to GitHub and go to the [GitHub Repository](https://github.com/Isabella-Mitchell/fledgling-bird-game)
2. Locate the Navbar at the top of the Repository (not top of page). Click the Settings tab.
3. Locate the Navbar on the left hand side of the page. Click the "Pages" section (under 'Code and automation').
4. Under "Source", click the dropdown called "None" and select "main". Click save.
5. The page will automatically refresh.
6. A notification will appear at the top of the page with the [link](https://github.com/Isabella-Mitchell/fledgling-bird-game/index.html) to the deployed site. You can return to this GitHub Pages section to access the link.

## Forking the GitHub Repository

Forks are used to propose changes to someone else's project or to use someone else's project as a starting point for your own idea. By forking the GitHub Repository you make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository.

To Fork a Github Repository:

1. Log in to GitHub and go to the [GitHub Repository](https://github.com/Isabella-Mitchell/fledgling-bird-game)
2. Locate the Fork button in the top-right corner of the page, click Fork.
3. You should now have a copy of the original repository in your GitHub account.

## Making a Local Clone

You will now have a fork of the repository, but you don't have the files in that repository locally on your computer.

To make a local clone:

1. Log in to GitHub and go to the [GitHub Repository](https://github.com/Isabella-Mitchell/fledgling-bird-game)
2. Above the list of files, click  Code.
3. To clone the repository using HTTPS, under "Clone with HTTPS", click the 'Copy' icon. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the 'Copy' icon. To clone a repository using GitHub CLI, click Use GitHub CLI, then click the 'Copy' icon.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory.
6. Type git clone, and then paste the URL you copied earlier. It will look like this, with your GitHub AE username instead of YOUR-USERNAME:

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `fledgling-bird-game`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://docs.github.com/en/github-ae@latest/get-started/quickstart/fork-a-repo) for the GitHub quick start guide with images and more detailed explanations of the above process.

# Credits

## Code

-   [Bootstrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library was used throughout the project mainly to make site responsive using the Bootstrap Grid System. I sourced code from the Bootstrap documentation when building ....

-   [Code Institute](https://codeinstitute.net/): I referred to lessons and source code from Code Institute's Web Application Development course. I sourced code for the footer social icons from the CV Project, and referred to the code from ..

- [Youtube Video: Google Geocode API & JavaScript Tutorial by Traversy Media](https://www.youtube.com/watch?v=pRiQeo17u6c)

- [eBird API 2.0 Documentation](https://documenter.getpostman.com/view/664302/S1ENwy59)

- Google Maps documentation

- Stack Overflow

## Content

## Media

# Acknowledgements

- to finish