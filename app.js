
let body = document.body;
body.style.fontFamily = 'arial';

// h1 style
let h1Tag = document.querySelector('h1');

h1Tag.style.textAlign = 'center';
h1Tag.style.color = 'green';
h1Tag.style.fontFamily = 'arial';
h1Tag.style.fontSize = '60px';
h1Tag.style.paddingTop = '30px';


// App style
var app = document.querySelector("#app");

app.style.background = '#fff';
app.style.maxWidth = '1000px';
app.style.margin = '0 auto';
app.style.padding = '30px';


// Create app Element
let heading = document.createElement('div');
heading.className = 'header';
app.append(heading);


// Create header logo div
let logo = document.createElement('div');
logo.className = 'logo';
heading.append(logo);
let logoLink = document.createElement('a');
logoLink.setAttribute("href", "#");
logoLink.innerText = 'Logo';
logoLink.style.fontSize = '30px';
logoLink.style.color = '#fff';
logoLink.style.textDecoration = 'none';
logoLink.style.fontFamily = 'arial';
logo.append(logoLink);


// Create header menu div
let menuDiv = document.createElement('div');
menuDiv.className = 'menu';
heading.append(menuDiv);


// Create menu item
let menuItemHome = document.createElement('a');
menuItemHome.setAttribute("href", "#");
menuItemHome.innerText = 'Home';
menuDiv.append(menuItemHome);


// Create menu item
let menuItemAbout = document.createElement('a');
menuItemAbout.setAttribute("href", "#");
menuItemAbout.innerText = 'About';
menuDiv.append(menuItemAbout);


// Create menu item
let menuItemService = document.createElement('a');
menuItemService.setAttribute("href", "#");
menuItemService.innerText = 'Service';
menuDiv.append(menuItemService);


// Create card main div
let mainContent = document.createElement('div');
mainContent.className = 'main-content';
app.append(mainContent);


// Create card div
let card = document.createElement('div');
card.className = 'card';
mainContent.append(card);

// Create card inner image
let cardImg = document.createElement('img');
cardImg.setAttribute("src", "https://via.placeholder.com/300");
card.append(cardImg);


// Create card inner title
let cardTitle = document.createElement('h1');
cardTitle.innerText = 'Card Title';
card.append(cardTitle);


// Create card inner content
let cardContent = document.createElement('p');
cardContent.innerText = 'Placeholder.com is a free image placeholder service for web designers, serving billions and';
card.append(cardContent);


// Create card div 2
let card2 = document.createElement('div');
card2.className = 'card';
mainContent.append(card2);

// Create card inner image
let cardImg2 = document.createElement('img');
cardImg2.setAttribute("src", "https://via.placeholder.com/300");
card2.append(cardImg2);


// Create card inner title
let cardTitle2 = document.createElement('h1');
cardTitle2.innerText = 'Card Title Two';
card2.append(cardTitle2);


// Create card inner content
let cardContent2 = document.createElement('p');
cardContent2.innerText = 'Placeholder.com is a free image placeholder service for web designers, serving billions and';
card2.append(cardContent2);


// Create card div 3
let card3 = document.createElement('div');
card3.className = 'card';
mainContent.append(card3);

// Create card inner image
let cardImg3 = document.createElement('img');
cardImg3.setAttribute("src", "https://via.placeholder.com/300");
card3.append(cardImg3);


// Create card inner title
let cardTitle3 = document.createElement('h1');
cardTitle3.innerText = 'Card Title Three';
card3.append(cardTitle3);


// Create card inner content
let cardContent3 = document.createElement('p');
cardContent3.innerText = 'Placeholder.com is a free image placeholder service for web designers, serving billions and';
card3.append(cardContent3);

//get footer date
var date = new Date();
var getDate = date.getFullYear();


// Create footer div
let footer = document.createElement('footer');
footer.innerText = getDate + ' Stack Exchange Inc';
app.append(footer);

