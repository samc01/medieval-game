import {getDice} from "./utils.js"

class Character {
    constructor(data) {
        Object.assign(this, data)
        this.diceHtml = this.getDicePlaceholders(this.diceCount)
    }

    getCharacterHtml() {
        const { name, img, healthPoints, diceCount, diceScores, diceHtml } = this
        return `<h1>${name}</h1>
                <img src=${img}>
                <p>Health: ${healthPoints}</p>
                <div id="dice-container">
                    ${diceHtml}
                </div>`
    }

    getDicePlaceholders(diceCount) {
        return new Array(diceCount).fill(0).map(() => {
            return `<div class="dice"></div>`
        }).join("")
    }

    setDiceHtml() {
        this.diceScores = getDice(this.diceCount)
        this.diceHtml = this.diceScores.map((dice) => {
            return `<div class="dice">${dice}</div>`
        }).join("")
    }
}

export default Character