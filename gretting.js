var today = new Date();
var hourNow = today.getHours();
var greeting;
var greeting2;

if (hourNow >= 24 & hourNow<=1) {
	greeting = "Happy Birthday My Pumpkins!";
} else if (hourNow >= 2) {
	greeting = "Good Night My Pumpkins!";
	greeting2 = "Have a Nice Dream"
} else if (hourNow >= 8 ) {	
	greeting = "Good Morning My Pumpkins!";
} else if (hourNow >= 13) {
	greeting = "Good Afternoon My Pumpkins!";
} else if (hourNow >= 18) {
	greeting = "Good Evening My Pumpkins!";
} else {
	greeting = "My Pumpkins tidur?";
}

document.write('<h1>'+greeting+'</h1>'+'<br>');
document.write(greeting2);