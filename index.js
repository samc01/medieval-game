import characterData from "./data.js"
import Character from "./Character.js"

const monstersArray = ["orc", "goblin", "demon"]

const wizard = new Character(characterData.wizard)
let monster = getNextMonster()

const button = document.getElementById("btn")
button.addEventListener("click", attack)


function getNextMonster() {
    let nextMonster = characterData[monstersArray.shift()]
    return nextMonster ? new Character(nextMonster) : {}
}

function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}

function attack() {
    wizard.setDiceHtml()
    monster.setDiceHtml()

    wizard.setDamage()
    monster.setDamage()

    wizard.takeDamage(monster.damage)
    monster.takeDamage(wizard.damage)

    render()

    if (monster.healthPoints === 0) {
        monster = getNextMonster()
        setWinnerDisplay()
    } 

}

function setWinnerDisplay() {
    let endMessage = "a"
    let endEmoji = "a"

    if (wizard.healthPoints === 0 && monster.healthPoints === 0) {
        endMessage = "No one has won!"
        endEmoji = ""
    }
    else if (monster.healthPoints === 0) {
        endMessage = "Monsters has won!"
        endEmoji = "☠️"
    } else if (wizard.healthPoints === 0) {
        endMessage = "Wizard has won!"
        endEmoji = "🔮"
    }  

    setWinnerDisplayHtml(endMessage, endEmoji)
}

function setWinnerDisplayHtml(endMessage, endEmoji) {
    document.body.innerHTML = `<h2>Game Over</h2>
                                <h3>${endMessage}</h3>
                                <h3>${endEmoji}</h3>`
}

render()



