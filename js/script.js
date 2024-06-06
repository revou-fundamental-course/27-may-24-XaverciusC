// --- Change Name --------------------------------------
function popup(){
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function submitUsername() {
    var username = document.getElementById("username").value;
    if (username) {
        document.getElementById("user").innerHTML = username;
        closePopup();
    } else {
        alert("We kindly sugest you tell your name Traveler");
    }
}

// --- Navigation --------------------------------------
function pagehome() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}

function pageprdct() {
    document.getElementById('prdct').scrollIntoView({ behavior: 'smooth' });
}

function pagemsg() {
    document.getElementById('msgus').scrollIntoView({ behavior: 'smooth' });
}

// --- Banner change --------------------------------------
let indexSlide = 1;
showBanner(1);

function nextSlide(n) {
    showBanner((indexSlide += n));
}

function showBanner(indexBanner) {
    let listImages = document.getElementsByClassName('banner-layer');
    if (indexBanner > listImages.length) indexSlide = 1;

    let index = 0;
    while (index < listImages.length) {
        listImages[index].style.display= 'none';
        index++
    }

    listImages[indexSlide - 1].style.display = '';

}

setInterval(() => nextSlide(1), 3000); 

// --- Message in --------------------------------------

function validateForm(){
    const name = document.forms["formin"]["nama-input"].value;
    const birthDate = document.forms["formin"]["ttl"].value;
    const gender = document.forms["formin"]["gender"].value;
    const messages = document.forms["formin"]["pesan"].value;

    if (name != "" && birthDate != "" && gender != "" && messages) {
        updateTXTarea(name, birthDate, gender, messages);
        return false;
    }
    else {
        alert("Can't be empty");
        return false;
    }
    
}

function updateTXTarea(name, birthDate, gender, messages){
    // Added time submitted
    var now = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day = days[now.getDay()];
    var date = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = `${day} : ${date}/${month}/${year} : ${hours}:${minutes}:${seconds}`;
    
    var naMa = name;
    var Birthdate = birthDate;
    var Gender = gender;
    var Msg = messages;
    var textarea = document.getElementById("area-output")
    textarea.value = "Date submited :" + timeString + "\n" +"Name :" + naMa + "\n" + "Birth Date :" + Birthdate + "\n" + "Gender :" + Gender + "\n" + "Message :" + Msg;
}

