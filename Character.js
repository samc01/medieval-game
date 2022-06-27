import {getDice} from "./utils.js"

class Character {
    constructor(data) {
        Object.assign(this, data)
    }

    getCharacterHtml() {
        const { name, img, healthPoints, diceCount, diceScores } = this
        return `<h1>${name}</h1>
                <img src=${img}>
                <p>Health: ${healthPoints}</p>
                <div id="dice-container">
                    ${this.getDicePlaceholders()}
                </div>`
    }

    getDicePlaceholders() {
        return new Array(this.diceCount).fill(0).map(() => {
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