// opdracht 1
let myProfile = {
  name: "Wesley",
  lastName: "Poth",
  age: 16,
  study: "Software Developer",
  score: "8",
};

// opdracht 2
let faceBook = {
  userName: "Wesley Poth",
  titel: "Profile",
  story:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, ipsa!",
  date: "13/11/2023",
  views: 69,
};

// opdracht 3 
const products = [
  {
    title: "Paprika chips",
    description: "platte stukjes aardappel met paprika smaak",
    healthy: "no",
  },

  {
    title: "Tomato",
    description: "een groot rond stuk groente",
    healthy: "yes",
  },

  {
    title: "Ananas",
    description:
      "Ananas heeft een zoete en pittige smaak met een subtiele scherpte die op de tong blijft hangen",
    healthy: "yes",
  },
];

console.log(products);
// opdracht 4
let car1 = {
  title: "Porsche Cayenne 4.8 S Tiptronic S 2012 Zwart",
  description:
    "The Porsche Cayenne 4.8-liter V8 engine has a horsepower of 385 @ 6,200 rpm and a torque of 369 lb-ft @ 3,500 rpm1.",
  price: "€ 19.950,-",
  kilometer: "249.887 km",
  buildDate: "2012",
};

let car2 = {
  title: "Ford Kuga 1.5 ST",
  description:
    "De Ford Kuga staat hoger op de wielen dan de Ford Focus waar hij hetzelfde onderstel mee deelt. Ook ziet hij er stoerder uit. Sinds 2011 is de Kuga verkrijgbaar met vierwielaandrijving. Deze specificaties zijn karakteristiek voor een SUV. Ford biedt SUV’s in verschillende formaten aan. Met een tweedehands Kuga kies je voor het middelgrote model. Het is een eigentijdse ruime gezinsauto die lekker stuurt en prima presteert. Als je geïnteresseerd bent in gebruikte middelgrote SUV’s, doe je er goed aan een proefrit in een Ford Kuga occasion te maken. ",
  price: "€ 16.499,-.",
  kilometer: "91.572 km",
  buildDate: "2018",
};

let car3 = {
  title: "Land Rover Range Rover Sport 2.0 P400e 404 pk",
  description:
    "Achterbank verwarmd, Achteropkomend verkeer waarschuwing, Achteruitrijcamera (086FA), Alarmsysteem, Automatische dimmende achteruitkijkspiegel (031CG), Autonomous Emergency Braking, Cruise control",
  price: "€ 62.945,",
  kilometer: "120.070 km",
  buildDate: "2019",
};

// opdracht 5

let opdracht8array = [
  {
  title: "Danerolles croissants",
  beschrijving: "240 g",
  actie: "per blik 1.39",
  prijs: 1.39,
}, 
{
  title: "Danerolles croissants",
  beschrijving: "240 g",
  actie: "per blik 1.39",
  prijs: 1.39,
}, 
{
  title: "Dubbelfris",
  beschrijving: "Pak 1.5 liter",
  actie: "per fles 1.29",
  prijs: 1.29,
}]
console.log(opdracht8array);



// opdracht 6 
let s23Ultra = {
  processor: "snapdragon 8 Gen2",
  battery: "5400mah",
  panel: "3088 x 1440",
  size: "17.27 cm",
  ram: "12GB",
  Storage: "512GB",
};

let googlePixel8Pro = {
  processor: "snapdragon 8 Gen2",
  battery: "5050mah",
  panel: "2992 x 1344 ",
  size: "15,24 cm",
  ram: "12GB",
  Storage: "128GB",
};

let iphone15ProMax = {
  processor: "Apple A17 Pro",
  battery: "4422mah",
  panel: "2796x1290",
  size: "16,15 cm",
  ram: "8 GB",
  Storage: "1TB",
};


// opdracht 7 

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}

// opdracht 8 

for (let i = 0; i < opdracht8array.length; i++) {
  console.log(opdracht8array[i]);
}

// opdracht 9 

const cardContainer = document.querySelector(".cardContainer");


for (let i = 0; i < products.length; i++) {
  const cardHTML = `
    <div class="card">
      <h2>${products[i].title}</h2>
      <p>Description: ${products[i].description}</p>
      <p>Healthy: ${products[i].healthy}</p>
    </div>
  `;
  cardContainer.innerHTML += cardHTML;
}

// opdracht 10 
  // Get the container element
  const cardContainer2 = document.querySelector("cardContainer2");

  // Generate HTML content for each card and append it to the container
  for (let i = 0; i < opdracht8array.length; i++) {
    const cardHTML = `
      <div class="card">
        <h2>${opdracht8array[i].title}</h2>
        <p>Beschrijving: ${opdracht8array[i].beschrijving}</p>
        <p>Actie: ${opdracht8array[i].actie}</p>
        <p>Prijs: €${opdracht8array[i].prijs.toFixed(2)}</p>
      </div>
    `;
    cardContainer.innerHTML += cardHTML;
  }
