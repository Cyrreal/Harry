const potterBase = [
  {
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
    ancestry: "half-blood",
    eyeColour: "green",
    hairColour: "black",
    wand: { wood: "holly", core: "phoenix feather", length: 11 },
    patronus: "stag",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Daniel Radcliffe",
    alive: true,
    image: "http://24api.ru/web/img/hp/harry.jpg",
  },
  {
    name: "Hermione Granger",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "19-09-1979",
    yearOfBirth: 1979,
    ancestry: "muggleborn",
    eyeColour: "brown",
    hairColour: "brown",
    wand: { wood: "vine", core: "dragon heartstring", length: "" },
    patronus: "otter",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Emma Watson",
    alive: true,
    image: "http://24api.ru/web/img/hp/hermione.jpeg",
  },
  {
    name: "Ron Weasley",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "01-03-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColour: "blue",
    hairColour: "red",
    wand: { wood: "willow", core: "unicorn tail-hair", length: 14 },
    patronus: "Jack Russell terrier",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Rupert Grint",
    alive: true,
    image: "http://24api.ru/web/img/hp/ron.jpg",
  },
  {
    name: "Draco Malfoy",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "05-06-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColour: "grey",
    hairColour: "blonde",
    wand: { wood: "hawthorn", core: "unicorn tail-hair", length: 10 },
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Tom Felton",
    alive: true,
    image: "http://24api.ru/web/img/hp/draco.jpg",
  },
  {
    name: "Minerva McGonagall",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "04-10-1925",
    yearOfBirth: 1925,
    ancestry: "",
    eyeColour: "",
    hairColour: "black",
    wand: { wood: "", core: "", length: "" },
    patronus: "tabby cat",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Dame Maggie Smith",
    alive: true,
    image: "http://24api.ru/web/img/hp/mcgonagall.jpg",
  },
  {
    name: "Cedric Diggory",
    species: "human",
    gender: "male",
    house: "Hufflepuff",
    dateOfBirth: "",
    yearOfBirth: 1977,
    ancestry: "",
    eyeColour: "grey",
    hairColour: "brown",
    wand: { wood: "ash", core: "unicorn hair", length: 12.25 },
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Robert Pattinson",
    alive: false,
    image: "http://24api.ru/web/img/hp/cedric.png",
  },
  {
    name: "Cho Chang",
    species: "human",
    gender: "female",
    house: "Ravenclaw",
    dateOfBirth: "",
    yearOfBirth: "",
    ancestry: "",
    eyeColour: "brown",
    hairColour: "black",
    wand: { wood: "", core: "", length: "" },
    patronus: "swan",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Katie Leung",
    alive: true,
    image: "http://24api.ru/web/img/hp/cho.jpg",
  },
  {
    name: "Severus Snape",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "09-01-1960",
    yearOfBirth: 1960,
    ancestry: "half-blood",
    eyeColour: "black",
    hairColour: "black",
    wand: { wood: "", core: "", length: "" },
    patronus: "doe",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Alan Rickman",
    alive: false,
    image: "http://24api.ru/web/img/hp/snape.jpg",
  },
  {
    name: "Rubeus Hagrid",
    species: "half-giant",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "06-12-1928",
    yearOfBirth: 1928,
    ancestry: "half-blood",
    eyeColour: "black",
    hairColour: "black",
    wand: { wood: "oak", core: "", length: 16 },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Robbie Coltrane",
    alive: true,
    image: "http://24api.ru/web/img/hp/hagrid.png",
  },
  {
    name: "Neville Longbottom",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "30-07-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColour: "",
    hairColour: "blonde",
    wand: { wood: "cherry", core: "unicorn tail-hair", length: 13 },
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Matthew Lewis",
    alive: true,
    image: "http://24api.ru/web/img/hp/neville.jpg",
  },
  {
    name: "Luna Lovegood",
    species: "human",
    gender: "female",
    house: "Ravenclaw",
    dateOfBirth: "13-02-1981",
    yearOfBirth: 1981,
    ancestry: "",
    eyeColour: "grey",
    hairColour: "blonde",
    wand: { wood: "", core: "", length: "" },
    patronus: "hare",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Evanna Lynch",
    alive: true,
    image: "http://24api.ru/web/img/hp/luna.jpg",
  },
  {
    name: "Ginny Weasley",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "11-08-1981",
    yearOfBirth: 1981,
    ancestry: "pure-blood",
    eyeColour: "brown",
    hairColour: "red",
    wand: { wood: "yew", core: "", length: "" },
    patronus: "horse",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Bonnie Wright",
    alive: true,
    image: "http://24api.ru/web/img/hp/ginny.jpg",
  },
  {
    name: "Sirius Black",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "03-11-1959",
    yearOfBirth: 1959,
    ancestry: "pure-blood",
    eyeColour: "grey",
    hairColour: "black",
    wand: { wood: "", core: "", length: "" },
    patronus: "hare",
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: "Gary Oldman",
    alive: false,
    image: "http://24api.ru/web/img/hp/sirius.JPG",
  },
  {
    name: "Remus Lupin",
    species: "werewolf",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "10-03-1960",
    yearOfBirth: 1960,
    ancestry: "half-blood",
    eyeColour: "green",
    hairColour: "brown",
    wand: { wood: "cypress", core: "unicorn tail-hair", length: 10.25 },
    patronus: "wolf",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "David Thewlis",
    alive: false,
    image: "http://24api.ru/web/img/hp/lupin.jpg",
  },
  {
    name: "Arthur Weasley",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "06-02-1950",
    yearOfBirth: 1950,
    ancestry: "pure-blood",
    eyeColour: "blue",
    hairColour: "red",
    wand: { wood: "", core: "", length: "" },
    patronus: "weasel",
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: "Mark Williams",
    alive: true,
    image: "http://24api.ru/web/img/hp/arthur.jpg",
  },
  {
    name: "Bellatrix Lestrange",
    species: "human",
    gender: "female",
    house: "Slytherin",
    dateOfBirth: "",
    yearOfBirth: 1951,
    ancestry: "pure-blood",
    eyeColour: "brown",
    hairColour: "black",
    wand: { wood: "walnut", core: "dragon heartstring", length: 12.75 },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: "Helena Bonham Carter",
    alive: false,
    image: "http://24api.ru/web/img/hp/bellatrix.jpg",
  },
  {
    name: "Lord Voldemort",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "31-12-1926",
    yearOfBirth: 1926,
    ancestry: "half-blood",
    eyeColour: "red",
    hairColour: "bald",
    wand: { wood: "yew", core: "phoenix feather", length: 13.5 },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: "Ralph Fiennes",
    alive: false,
    image: "http://24api.ru/web/img/hp/voldemort.jpg",
  },
  {
    name: "Horace Slughorn",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "",
    yearOfBirth: "",
    ancestry: "pure-blood",
    eyeColour: "green",
    hairColour: "blonde",
    wand: { wood: "cedar", core: "dragon heartstring", length: 10.25 },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Jim Broadbent",
    alive: true,
    image: "http://24api.ru/web/img/hp/slughorn.JPG",
  },
  {
    name: "Kingsley Shacklebolt",
    species: "human",
    gender: "male",
    house: "",
    dateOfBirth: "",
    yearOfBirth: "",
    ancestry: "pure-blood",
    eyeColour: "brown",
    hairColour: "brown",
    wand: { wood: "", core: "", length: "" },
    patronus: "lynx",
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: "George Harris",
    alive: true,
    image: "http://24api.ru/web/img/hp/kingsley.jpg",
  },
  {
    name: "Dolores Umbridge",
    species: "human",
    gender: "female",
    house: "Slytherin",
    dateOfBirth: "",
    yearOfBirth: "",
    ancestry: "half-blood",
    eyeColour: "brown",
    hairColour: "grey",
    wand: { wood: "birch", core: "dragon heartstring", length: 8 },
    patronus: "persian cat",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Imelda Staunton",
    alive: true,
    image: "http://24api.ru/web/img/hp/umbridge.jpg",
  },
  {
    name: "Lucius Malfoy",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "",
    yearOfBirth: 1954,
    ancestry: "pure-blood",
    eyeColour: "grey",
    hairColour: "blonde",
    wand: { wood: "elm", core: "dragon heartstring", length: 18 },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: "Jason Isaacs",
    alive: true,
    image: "http://24api.ru/web/img/hp/lucius.jpg",
  },
  {
    name: "Vincent Crabbe",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "",
    yearOfBirth: "",
    ancestry: "pure-blood",
    eyeColour: "black",
    hairColour: "black",
    wand: { wood: "", core: "", length: "" },
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Jamie Waylett",
    alive: false,
    image: "http://24api.ru/web/img/hp/crabbe.jpg",
  },
  {
    name: "Gregory Goyle",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "",
    yearOfBirth: "",
    ancestry: "pure-blood",
    eyeColour: "",
    hairColour: "brown",
    wand: { wood: "", core: "", length: "" },
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Josh Herdman",
    alive: true,
    image: "http://24api.ru/web/img/hp/goyle.jpg",
  },
  {
    name: "Mrs Norris",
    species: "cat",
    gender: "female",
    house: "",
    dateOfBirth: "",
    yearOfBirth: "",
    ancestry: "",
    eyeColour: "yellow",
    hairColour: "brown",
    wand: { wood: "", core: "", length: "" },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Maxime, Alanis and Tommy the cats",
    alive: true,
    image: "http://24api.ru/web/img/hp/norris.JPG",
  },
  {
    name: "Argus Filch",
    species: "human",
    gender: "male",
    house: "",
    dateOfBirth: "",
    yearOfBirth: "",
    ancestry: "squib",
    eyeColour: "",
    hairColour: "grey",
    wand: { wood: "", core: "", length: "" },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "David Bradley",
    alive: true,
    image: "http://24api.ru/web/img/hp/filch.jpg",
  },
];

let shortObj = potterBase.map((element) => {
  for (key in element) {
    return {
      name: element.name,
      actor: element.actor,
      house: element.house ? element.house : "No house",
      wand: element.wand.core ? element.wand.core : "???",
      alive: element.alive ? "Yes" : "No",
      image: element.image,
    };
  }
});
const elem = document.querySelector(".characters-grid");
function createDiv() {
  let insideElems = "";
  shortObj.forEach(function (element) {
    insideElems += `
        <div class="grid-item">
            <div><img src="${element.image}"></div>
            <p>Name: ${element.name}<br>
            Actor: ${element.actor}<br>
            House: ${element.house}<br>
            Alive: ${element.alive}<br>
            Wand: ${element.wand}<br>
            </p>
        </div>
        `;
  });

  elem.innerHTML = insideElems;
}

document.querySelector("#select-bar").addEventListener("change", filterBy);
document.querySelector("#search").addEventListener("input", filterBy);
function filterBy() {
  let name = document.querySelector("input").value;
  let house = document.querySelector("select").value;

  filterHouse = shortObj.filter((elem) => {
    return (
      elem.house.includes(house) &&
      elem.name.toLowerCase().includes(name.toLowerCase())
    );
  });
  // if (house == "Chose") {
  //   return loadSearchCard(filterHouse);
  // }

  // filterName = shortObj.filter((elem) => {
  //   return elem.name.toLowerCase().includes(name.toLowerCase());
  // });
  loadSearchCard(filterHouse);
}

function loadSearchCard(arg1) {
  insideElems = "";
  arg1.forEach(function (element) {
    insideElems += `
      <div class="grid-item">
      <div><img src="${element.image}"></div>
      <p>Name: ${element.name}<br>
      Actor: ${element.actor}<br>
      House: ${element.house}<br>
      Alive: ${element.alive}<br>
      Wand: ${element.wand}<br></p></div>`;
  });
  elem.innerHTML = insideElems;
}

createDiv();

// const searchInput = document.querySelector("#search");
// const selectInput = document.querySelector("#select-bar");
// searchInput.addEventListener("input", (event) => search(event));
// selectInput.addEventListener("change", (event) => select(event));

// const select = (event) => {
//   schoolSearch = shortObj.filter((elem) => {
//     return elem.house.includes(event.target.value);
//   });

//   elem.innerHTML = "";
//   loadSearchCard(schoolSearch);
// };
// document
//   .querySelector("#search")
//   .addEventListener("input", (event) => search(event));
// const search = (event) => {
//   nameSearch = shortObj.filter((elem) => {
//     return elem.name.toLowerCase().trim().includes(event.target.value);
//   });
//   elem.innerHTML = "";
//   loadSearchCard(nameSearch);
// };

// searchInput.addEventListener("change", search);
// selectInput.addEventListener("input", search);
// function search() {
//   let nameSearch = document.querySelector("input").value;
//   let houseSearch = document.querySelector("select").value;
//   filterHouse = shortObj.filter((elem) => {
//     return (
//       elem.house.includes(houseSearch) &&
//       elem.name.toLowerCase().includes(nameSearch)
//     );
//   });
//   loadSearchCard(filterHouse);
// }
