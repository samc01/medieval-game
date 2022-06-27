function getRandomNumber() {
    return Math.floor(Math.random() * 6 + 1)
}

function getDice(diceCount) {
    return new Array(diceCount).fill(0).map(() => {
        return getRandomNumber()
    })
}

export {getRandomNumber, getDice}