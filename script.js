function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    if (choice < 1) {
        return "Rock"
    } else if (choice  > 1) {
        return "Paper"
    } else {
        return "scissors"
    }
}

console.log(getComputerChoice())
