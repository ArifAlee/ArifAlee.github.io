import { Characters } from "./characters.js";

const input = document.querySelector("#input");
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", () => {
  const userInput = input.value;
  updateChar(userInput);
});
// Submit by pressing ENTER
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    updateChar(input.value);
  }
});

// Function updates h1 where name is displayed
const updateChar = async function (name) {
  try {
    const charName = await getCharData(name);
    const charh1 = document.querySelector(".char-name");
    charh1.textContent = charName.name;
  } catch (error) {
    console.log("Error updating name", error);
  }
};

// Get data from starwars api
const getCharData = async function (num) {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${num}`);
    return res.data;
  } catch (error) {
    console.log("Error fetching data", error);
  }
};

// Function retrieves all data and stores it
const allData = async function () {
  const charData = [];
  for (let i = 1; i < 84; i++) {
    if (i === 17) {
      //no details found for #17, will be skipped
      continue;
    }
    try {
      const data = await getCharData(i);
      charData.push(data);
    } catch (error) {
      console.log("Error retrieving data", error);
    }
  }
  return charData;
};

const getCharObj = async function (name) {
  try {
    const characters = await allData();

    return characters.find(
      (character) => character.name.toLowerCase() === name.toLowerCase()
    );
    // console.log(characters.charData.map((char) => char.name))
  } catch (error) {
    console.log("Error creating object", error);
  }
};

async function character(input) {
  const name = input;
  const character = await getCharObj(name);
  try {
    console.log(character);
  } catch (error) {
    console.log("Character not found");
  }
}
character("luke skywalker");

const luke = new Characters(
  "Luke Skywalker",
  172,
  77,
  "blond",
  "fair",
  "blue",
  "19BBY",
  "male",
  "Tatooine"
);

console.log(luke);

// character.name,
// character.height,
// character.mass,
// character.hair_color,
// character.skin_color,
// character.birth_year,
// character.gender,
// character.homeworld
