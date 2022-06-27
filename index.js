import characterData from "./data.js"
import Character from "./Character.js"

const wizard = new Character(characterData.wizard)
const orc = new Character(characterData.orc)
const goblin = new Character(characterData.goblin)
const demon = new Character(characterData.demon)


document.getElementById("dice-container-hero").innerHTML = "<p>hello</p>"
