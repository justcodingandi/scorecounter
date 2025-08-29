let scoreHome = document.getElementById ("score-home")
let scoreGuest = document.getElementById("score-guest")
let guest = 0
let home = 0

function scoreHome5() {
    home += 5
    scoreHome.textContent = home
}
function scoreHome2() {
    home += 2
    scoreHome.textContent = home
}
function scoreHome3() {
    home += 3
    scoreHome.textContent = home
}
function scoreHome7() {
    home += 7
    scoreHome.textContent = home
}
function scoreGuest5() {
    guest += 5
    scoreGuest.textContent = guest
}
function scoreGuest2() {
    guest += 2
    scoreGuest.textContent = guest
}
function scoreGuest3() {
    guest += 3
    scoreGuest.textContent = guest
}
function scoreGuest7() {
    guest += 7
    scoreGuest.textContent = guest
}

function newGame() {
    scoreHome.textContent = 0
    scoreGuest.textContent = 0
    guest = 0
    home = 0
}



