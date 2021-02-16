// Trip Planner 

// You need to plan a road trip.
// Add an average speed for your travelling.
// Add the distance in kilometer.
// As an output you will get the time to cover the trip.

// Explanation: 
// It will take 150/60 = 3,75 hours to cover
// the distance, which is equivalent to 
// 3,75 * 60 = 225 minutes

const averageSpeed = document.getElementById("averageSpeed");
const kilometers = document.getElementById("kilometers");
const submit = document.getElementById("submit");
const placeForMinutes = document.getElementById("placeForMinutes");
const placeForResetBtn = document.getElementById("placeForResetBtn");
const container = document.querySelector(".container");
const car = document.getElementById("car");

let clickCount = 0;

const timeInMinutes = () => {
    if(clickCount === 0){
        let valueOfASpeed = averageSpeed.value;
        let valueOfKilometers = kilometers.value;
        let timeInHours = valueOfKilometers / valueOfASpeed;
        let minutes = timeInHours * 60;
        let hours = (minutes / 60);
        let rhours = Math.floor(hours);
        let newMinutes = (hours - rhours) * 60;
        let rNewMinutes = Math.round(newMinutes);
        placeForMinutes.classList.add("placeForMinutesClass");
        placeForMinutes.innerHTML = 
        `Your trip takes ${rhours} hour(s) and ${rNewMinutes} minute(s).`;
        submit.value="Reset";
        car.classList.add("carShows");
    }else{
        location.reload();
    }
      clickCount++;  
    }
       
submit.addEventListener('click', timeInMinutes)

