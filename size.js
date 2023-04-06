//////// PROFILE - SIZE - SEATS ////////
let number = document.getElementById("numberSeats");
const up = document.getElementById("plus");
const down = document.getElementById("down");

up.addEventListener('click', function() {
    if (number.value < parseInt(number.max)) {
        number.value = parseInt(number.value) + 1;
    }
});

down.addEventListener('click', function() {
    if (number.value > parseInt(number.min)) {
        number.value = parseInt(number.value) - 1;
    }
});