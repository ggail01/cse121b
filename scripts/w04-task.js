/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Abigail Bado",
    photo: "images/profileimage.jpg",
    favoriteFoods: [
        'mango',
        'strawberry',
        'ice cream',
        'pizza',
        'pork adobo',
        'sweet n sour pork',
        'chicken curry',
        'beafsteak'
    ],
    hobbies: [
        'Reading Novels',
        'Photography',
        'Drawing',
        'Digital Design'
    ],

    placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Negros Occidental, PHL',
        length: '2 years'
    },
    {
        place: 'Caloocan City, PHL',
        length: '6 years'
    },
    {
        place: 'Quezon City, PHL',
        length: '10 years'
    }
)



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
let li = document.createElement('li');
li.textContent = food;
document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
let li = document.createElement('li');
li.textContent = hobby;
document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {

let dt = document.createElement('dt');
dt.textContent = place.place;

let dd = document.createElement('dd');
dd.textContent = place.length;

document.querySelector('#places-lived').appendChild(dt);
document.querySelector('#places-lived').appendChild(dd);
})

