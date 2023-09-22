/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Abigail L. Bado";
let currentYear = "2023";
let profilePicture = "images/profileimage.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year")
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute = ("src", profilePicture);
imageElement.setAttribute = ("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

// #1
let favoriteFoods = [
    "mango", 
    "strawberry",
    "ice cream",
    "pizza",
    "pork adobo",
    "sweet n' sour pork",
    "chicken curry",
    "beafsteak",
];

// #2 
/* The other one is in step 3 */
foodElement.textContent += favoriteFoods;

// #3
let newFavoriteFood = "fish fillet";

// #4
favoriteFoods.push(newFavoriteFood);

// #5
foodElement.innerHTML += `<br>${favoriteFoods}`;

// #6: Remove first element
favoriteFoods.shift();

// #7
foodElement.innerHTML += `<br>${favoriteFoods}`;

// #8: Remove last elemnent
favoriteFoods.pop();

// #9
foodElement.innerHTML += `<br>${favoriteFoods}`;
