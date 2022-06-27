import {getRandomNumber, getDice} from "./utils.js"

class Character {
    constructor(data) {
        Object.assign(this, data)
    }

    getDicePlaceholders() {
        return newArray(this.diceCount).map(() => {
            return `<div class="dice"></div>`
        }).join("")
    }

    getDiceHtml() {
        return getDice(this.diceCount).map((dice) => {
            return `<div class="dice">${dice}</div>`
        }).join("")
    }
}

export default Character