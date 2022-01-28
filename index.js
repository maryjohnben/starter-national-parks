//connecting
/*
console.log(document);

const heading = document.querySelector("h1");
console.log(heading);

const value = document.querySelector(".value");
console.log(value);

const button= document.querySelector("button");
console.log(button);

const area = document.querySelector(".area-display");
console.log(area); //not sure

const descend = document.querySelector(".stat div");
console.log(descend);

const hello = document.querySelector(".hello");
console.log(hello);

// Find all the buttons on the page
const buttons = document.querySelectorAll("button");
console.log(buttons);

// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
//   console.log(element);
}

for (let i = 0; i < heading3List.length; i++) {
    const element = heading3List[i];
    console.log(element);
  }

  const ratings = document.querySelectorAll('.rating-display div');
  console.log(ratings);

  for(let i = 0; i < ratings.length; i++) {
        let rating = ratings[i];
        console.log(rating);
  }

  //for very old browsers
  // Get a list of descriptions
// const list = document.querySelectorAll(".description-display");

// // Log them to the console
// Array.prototype.forEach.call(list, function (element) {
//   console.log(element);
// });
*/
//modyfying
const description = document.querySelectorAll(".description-display")
console.log(description);
// one method for accessing text
/*
for(let i = 0; i < description.length; i++) {
  let eachDescription = description[i];
  console.log(eachDescription); //cannot acess text inside yet
  let text = eachDescription.innerText;
  console.log(text);
}
*/
//easier for of loop
for(let eachDesc of description.values()) {
  // console.log(eachDesc);
  let textInside = eachDesc.innerText;
  // console.log(textInside);
  //limiting to 250 characters
  if (textInside.length > 250) {
    textInside = textInside.slice(0, 250);
    textInside += '...';
  }
  // console.log(textInside);
  eachDesc.innerText = textInside; //updating the html element
}
//innerHTML prop to make ... above clickable
for(let eachDesc of description.values()) {
  // console.log(eachDesc);
  let textInside = eachDesc.innerText;
  // console.log(textInside);
  //limiting to 250 characters
  if (textInside.length > 250) {
    textInside = textInside.slice(0, 250);
    textInside += '<a href="#">...</a>'; //makes ... clickable
  }
  // console.log(textInside);
  eachDesc.innerHTML = textInside; //updating the html element to be clickable
}

const ratings = document.querySelectorAll('.rating-display div');
  console.log(ratings);

  for(let rating of ratings.values()) {
    let textRating = Number(rating.innerText); //can also use parseFloat()
    console.log(textRating);

    if(textRating > 4.7) {
      rating.style.fontWeight = 'bold'; //updates css to bold
      rating.style.color = "#3ba17c"; //updates css color
    }
    console.log(rating)
  }
  
  //modyfying using css property --refer to css classList property
  //when this is present cannot do the ratings so commented out 
  /*
  for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  
    if (ratingValue > 4.7) {
      rating.classList.add("high-rating");
      rating.classList.remove("value");
    }
  }
*/
  //event listener
  //to a button
  const firstBtn = document.querySelector("button");
  firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
  });

  firstBtn.addEventListener("click", (event) => {
    console.log(event.target); //specific target
  });
//when eventlistener needs to be added to multiple buttons
//but this not give detailed info on where the button is clicked so refer to bottom
  // Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");
console.log('///////////////')
console.log(allBtns);
// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target);
  });
});
//info on where particularly button is clicked
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.parentNode); //gives section element
  });
});
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9"; //changes color of section
  });
});
//////////////////////////////////////////////////////////////////
//big example
// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");
// Add an event listener
nameSorter.addEventListener("click", (event) => {
  event.preventDefault(); //clicking link tends to follow link and thus will not function as intended
  console.log("You clicked the name sorter"); //see if sorter is clicked

  //getting the main element
  const main = document.querySelector('main');
  console.log(main);

  //getting the list of the parks
  const parkList = main.querySelectorAll('.park-display');
  console.log(parkList); //got node list of all the parks
  
  //empty the main element
  main.innerHTML = '' //emptied the html
  
  //now creat an array from parkList
  const parksArray = Array.from(parkList);

  //now sort the array using array.sort method
  parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    console.log(parkAName);
    // if (parkAName < parkBName) {
    //   return -1;
    // } else if (parkAName > parkBName) {
    //   return 1;
    // } else {
    //   return 0;
    // }
    return parkAName < parkBName? -1 : 1 //if a is smaller -1 means comes first when arranged small to big
  });
console.log(parksArray);
  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park); //replaced entire sections one by one
  });
});
//////////////////////////////////////////////////////////////////
//sorting by rates
// const sortRating = ((ratingA, ratingB) => ratingA < ratingB? -1 : 1);
const ratingSorter = document.querySelector('#rating-sorter'); //selected the rating link
// console.log(ratingSorter);
//now add event listener
ratingSorter.addEventListener('click', (event)=> {
  event.preventDefault(); //when link is clicked it listens and even starts

  //take main from document
  const main = document.querySelector('main');
  console.log(main);
  //take all sections (park info in this case) from main
  const section = main.querySelectorAll('.park-display')
  console.log(section);
  //now add the list to array
  const sectionArr = Array.from(section);
  console.log(sectionArr);
  //now empty main
  main.innerHTML = '';
  //sort array rating
  sectionArr.sort((parkA, parkB)=>{
    const ratingA = Number(parkA.querySelector(".rating-display > .value").innerText);
    console.log(ratingA);
    const ratingB = Number(parkB.querySelector(".rating-display > .value").innerText);
    return ratingA < ratingB? -1 : 1;
  })
//adding the sorted array back to the main one by one
  sectionArr.forEach((park)=>{
    main.appendChild(park);
  });

});


///////////////////////////////////
//////////////////////////////////
//imp dom conent loader event listener
console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");
/////////////////////////////////////
//////////////////////////////////
