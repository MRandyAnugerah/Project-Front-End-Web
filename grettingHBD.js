var today = new Date();
var hourNow = today.getHours();
var greeting;
var greeting2;

if (hourNow >= 0 & hourNow < 1) {
	greeting = "Good Night!";
    greeting2 = " ";
} 
if(hourNow >= 8){
    greeting = "Hallo My Pumpkins!"
    greeting2 = "Have a Good Day"
}
else {
	greeting = "Ayanggggg ku dah tidur?";
    greeting2 = "Sweet Dream ya";
}

document.write('<h1>'+greeting+'</h1>'+'<br>');
document.write(greeting2);
