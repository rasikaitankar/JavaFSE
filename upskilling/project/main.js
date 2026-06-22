console.log("Welcome to the Community Portal");

window.onload = function(){

    alert("Page Fully Loaded");

    sessionStorage.setItem("lastVisit",new Date());

    let saved = localStorage.getItem("preferredEvent");

    if(saved){
        document.getElementById("eventType").value=saved;
    }

    loadEvents();

}

/* Data Types */

const eventName = "Community Workshop";

const eventDate = "20 July 2026";

let seats = 50;

console.log(`${eventName} ${eventDate} Seats:${seats}`);

/* Form */

document.getElementById("eventForm").addEventListener("submit",function(e){
	e.preventDefault();
	if(this.checkValidity()){
	document.getElementById("result").innerHTML = "Registration Successful";
	seats--;
	}
});

/* Phone */

function validatePhone(){

let phone=document.getElementById("phone").value;

if(phone.length!==10 || isNaN(phone)){
alert("Enter Valid Phone");
}

}

/* Fee */

function showFee(){

let type=document.getElementById("eventType").value;

let fee="";

if(type==="Conference")
fee="₹500";

else if(type==="Workshop")
fee="₹300";

else if(type==="Seminar")
fee="₹200";

document.getElementById("fee").innerHTML="Fee : "+fee;

}

/* Local Storage */

function savePreferences(){

localStorage.setItem("preferredEvent",document.getElementById("eventType").value);

}

function clearData(){

localStorage.clear();

sessionStorage.clear();

alert("Preferences Cleared");

}

/* Image */

function enlargeImage(){

document.getElementById("eventImg").style.width="400px";

}

/* Character Counter */

function countChars(){

let text=document.getElementById("feedback").value;

document.getElementById("count").innerHTML=text.length;

}

/* Video */

function videoReady(){

document.getElementById("videoMsg").innerHTML="Video Ready To Play";

}

/* Leave Warning */

window.onbeforeunload=function(){

return "Leave Page?";

}

/* Geolocation */

function findLocation(){

navigator.geolocation.getCurrentPosition(showPosition,showError,
{
enableHighAccuracy:true,
timeout:5000,
maximumAge:0
});

}

function showPosition(position){

document.getElementById("location").innerHTML=`Latitude:${position.coords.latitude} <br> Longitude:${position.coords.longitude}`;

}

function showError(error){

switch(error.code){
case error.PERMISSION_DENIED:
	alert("Permission Denied");
	break;

case error.TIMEOUT:
	alert("Timeout");
	break;

default:
	alert("Location Error");

}

}

/* Events */

const events = [
{name:"Music Festival",category:"Music"},
{name:"Workshop",category:"Education"},
{name:"Sports Day",category:"Sports"}
];

function displayEvents(){

const container=document.querySelector("#eventContainer");

container.innerHTML="";

events.forEach(event=>{

let card=document.createElement("div");

card.className="eventCard";

card.innerHTML=`<h3>${event.name}</h3>
<p>${event.category}</p>`;

container.appendChild(card);

});

}

displayEvents();

/* Search */

document.getElementById("search").addEventListener("keydown",function(){
console.log("Searching...");
});

/* Async */

function loadEvents(){
fetch("events.json")
.then(response=>
response.json())
.then(data=>
console.log(data))
.catch(error=>
console.log(error));
}