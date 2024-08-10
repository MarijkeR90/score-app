let homeCount = document.getElementById ("home-count")
let guestCount = document.getElementById ("guest-count")
let countHome = 0
let countGuest = 0

function plusOneHome(){
    countHome += 1
homeCount.textContent = countHome
}

function plusTwoHome(){
    countHome += 2
    homeCount.textContent = countHome
}

function plusThreeHome(){
    countHome += 3
    homeCount.textContent = countHome
}

function plusOneGuest(){
    countGuest += 1
    guestCount.textContent = countGuest
}

function plusTwoGuest(){
    countGuest += 2
    guestCount.textContent = countGuest
}

function plusThreeGuest(){
    countGuest += 3
    guestCount.textContent = countGuest
}

function newGame(){
    countHome = 0
    countGuest = 0
    homeCount.textContent = countHome
    guestCount.textContent = countGuest
}