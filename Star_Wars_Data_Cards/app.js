import { Characters } from './characters.js';

const input = document.querySelector("#input");
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", () => {
  updateChar(input.value);
});
// Submit by pressing ENTER
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    updateChar(input.value);
  }
});

// Function updates h1 where name is displayed
const updateChar = async function (name) {
  const charName = await getName(name);
  const charh1 = document.querySelector(".char-name");
  charh1.textContent = charName;
};


// Get info from starwars api
const getName = async function (num) {
  const res = await axios.get(`https://swapi.dev/api/people/${num}`);
  return res.data.name;
};

// Function retrieves all the names and stores it
const allNames = async function () {
  const charNames = [];
  for (let i = 1; i < 84; i++) {
    if(i === 17){ //no details found for #17, will be skipped
      continue;
    }
    try {
      const names = await getName(i);
      charNames.push(names)
    } catch (error) {
      console.log("Error retrieving data", error);
    }
  }
  return charNames;
};

allNames()

const luke = new Characters("Luke Skywalker",172,77,"blond","fair","blue","19BBY","male","Tatooine")

console.log(luke)

