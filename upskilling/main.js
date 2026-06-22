//Task 1st
console.log("Welcome to the Community Portal");

window.onload = function(){
	alert("Page Fully Loaded");
}

//Task 2
const name = "Music Festival";
const date = "20 June 2026";

let seats = 50;

console.log(`Event: ${name} | Date: ${date} | Seats: ${seats}`);

seats--;

console.log("Seats Remaining: " + seats);

//Task 3
const event = [
	{name:"Music Festival", seats:20, upcoming:true},
	{name:"Sports Day", seats:0, upcoming:true},
	{name:"Old Event", seats:10, upcoming:false},
];

event.forEach(e => {
	if(e.upcoming && e.seats > 0){
		console.log(e.name);
	}else{
		console.log(e.name+ " Hidden");
	}
});

function register(){
	try{
		let seats = 3;
		if(seats<=0){
			throw new Error("No seats available");	
		}
		console.log("Registeration Successfully");

	}catch(error){
		console.log(error.message);
	}
}

register();

//Task 4
function addUser(){
	console.log("User added");
}
function registerUser(){
	console.log("User Registered");
}
function filterEventsByCategory(events,callback){
	return events.filter(callback);
}
const registerCounter = function () {
	let count = 0;
	return function(){
		count++;
		return count;
	}
};

const counter = registerCounter();
console.log(counter());
console.log(counter());

//Task 5
function Event(name,seats){
	this.name = name;
	this.seats = seats;
}
Event.prototype.checkA = function(){
	return this.seats > 0;
}
const event1 = new Event("Workshop",10);
console.log(event1.checkA());
Object.entries(event1).forEach(item => {
	console.log(item);
});
/*
class Event{
	constructor(name,seats){
		this.name = name;
		this.seats = seats;
	}	
	checkA(){
		return this.seats > 0;
	}
}
*/

//Task 6
let events = [];

events.push("Music Festival");
events.push("Workshop");
events.push("Music Club");

console.log(events);

const musicSelect = events.filter(event => event.includes("Music"));
console.log(musicSelect);

const cards = events.map(event => `Workshop on ${event}`);
console.log(cards);

//Task 7

document.addEventListener("DOMContentLoaded",function(){

const container = document.getElementById("eventContainer");
console.log(container);
const card = document.createElement("div");
card.innerHTML = "<h3>Music Festival</h3>";
container.appendChild(card);

});

function UpdateStatus(){
	document.getElementByID("status").innerHTML="Registerd";
}	
function registerEvent(){
	alert("Registered");
}
function filterCategory(){
	alert("Category Changed");
}
document.getElementById("search").addEventListener("keydown",function(){
	console.log("searching...");
});