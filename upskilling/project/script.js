function validatePhone() {
    let phone = document.getElementById("phone").value;
    if(phone.length !== 10 || isNaN(phone)) {
        alert("Please enter a valid 10-digit phone number.");
    }
}

function showFee(){
	console.log("Dropdown Changed");
    let type = document.getElementById("eventType").value;

    let fee = "";

    if(type=="Conference")
        fee="₹500";
    else if(type=="Workshop")
        fee="₹300";
    else if(type=="Seminar")
        fee="₹200";

    document.getElementById("fee").innerHTML = "Fee: "+fee;
}

function enlargeImage(){
    let img = document.getElementById("eventImg");

    img.style.width="400px";
    img.style.height="300px";

}

function countChars(){
    let text = document.getElementById("feedback").value;
    document.getElementById("count").innerHTML = text.length;
}

function videoReady(){
    document.getElementById("videoMsg").innerHTML="Video ready to play";
}

window.onbeforeunload = function(){
    return "Are you sure you want to leave?";
}

function savePreference(){
    let eventType = document.getElementById("eventType").value;

    localStorage.setItem("preferredEvent", eventType);
}

window.onload = function(){
    sessionStorage.setItem("lastVisit",new Date().toLocaleString());
    let saved = localStorage.getItem("preferredEvent");
    if(saved){
        document.getElementById("eventType").value = saved;
    }
}

function clearData(){
    localStorage.clear();
    sessionStorage.clear();
    alert("Preferences cleared!");
}

function findLocation(){

    navigator.geolocation.getCurrentPosition(showPosition,showError,{
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0
    });

}

function showPosition(position){
    document.getElementById("location").innerHTML = "Latitude : "+position.coords.latitude+"<br>Longitude : "+position.coords.longitude;
}

function showError(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            alert("Permission denied");
            break;

        case error.TIMEOUT:
            alert("Request timed out");
            break;
        
        default:
            alert("Location unavailable");

    }
}
console.log("Page Loaded");
