import characterData from "./data.js"
import Character from "./Character.js"

const wizard = new Character(characterData.wizard)
const orc = new Character(characterData.orc)
const goblin = new Character(characterData.goblin)
const demon = new Character(characterData.demon)

function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}

function attack() {
    wizard.setDiceHtml()
    orc.setDiceHtml()
    render()
}

render()

document.getElementById("btn").addEventListener("click", attack)

