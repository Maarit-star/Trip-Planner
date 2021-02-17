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
const error1 = document.getElementById("placeForError1");
const error2 = document.getElementById("placeForError2");

let clickCount = 0;

let errorF1 = () => {
    error1.classList.add("error");
    error1.innerHTML =`Add Average Speed`;
    setTimeout(function(){ location.reload(); }, 1200);
}

let errorF2 = () => {
    error2.classList.add("error");
    error2.innerHTML = `Add kilometers`;
    setTimeout(function(){ location.reload(); }, 1200);
}

const timeInMinutes = () => {
    if(clickCount === 0 && averageSpeed.value=="" && kilometers.value==""){
        errorF1();
        errorF2();
    }else if(clickCount === 0 && averageSpeed.value==""){
        errorF1();
    } else if(clickCount === 0 && kilometers.value==""){
        errorF2();
    }else if(clickCount == 0){
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

