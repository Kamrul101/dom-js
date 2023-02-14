//getElementsByTagName

const liCollection = document.getElementsByTagName('li');
        // console.log(liCollection);
for(const li of liCollection)
        {
             console.log(li.innerText);
        }
 const headings = document.getElementsByTagName('h1');
for (const allHeading of headings)
    {
            console.log(allHeading);
            console.log(allHeading.innerText);
 }


//getElementsByClassName
// const allPlaces = document.getElementsByClassName('places');
//         for(const place of allPlaces)
//         {
//             console.log(place.innerText);
//         }



//getElementByID
const fruitTitle = document.getElementById('fruits-title');
        console.log(fruitTitle.innerText);
        fruitTitle.innerText = 'Eat fruits';



// querySelectorAll
const someLi = document.querySelectorAll('#place-title');
       for(const li of someLi){
        console.log(li.innerText);
       } 
        

//querySelector for single elemet
const allPlaces = document.querySelector('#places-list li');
        console.log(allPlaces.innerText);


//dynamic styles
const place = document.getElementById('place-title');
      place.style.color = 'red';


//append child
const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Food List';
section.appendChild(h1);

const ul =document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Briyani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Burger';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'Pizza';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);