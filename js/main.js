'use strict'

function askName() {
    var userName = prompt('What is your name?');
    return document.write('<h3>' + 'Nice to meet you ' + userName + '</h3>');
}
askName(); 

function getGreeting(){
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow >= 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome!'; 
}

return document.write('<h3>' + greeting + '</h3>');
}
getGreeting();
    





function getProduct() {
var response = prompt('Would you rather see Lemon eating, playing or sleeping?');
var item; 
    
while(response != 'eating' && response != 'playing' && response != 'sleeping') {
    item = prompt("BE SPECIFIC!");
}
if (response === 'eating') {
    item = '<img src="/images/lemongrass.JPG">';
} else if (response === 'playing') { 
    item = '<img src="/images/lemonhead.JPG">';
} else if (response === 'sleeping') {
    item = '<img src="images/lemonsleeping1.JPG">';
}
return item; 
}
getProduct(); 

    
    

function getCount() {
    var count = prompt('Great! How many images would you like to see?');
    while(isNaN(count) || count == '') {
    count = prompt("Please enter a number!");
}
return count; 
}
getCount(); 
    
  
//where helper functions are called

function showOrder() {
      var result = ''; 
      var itemType = getProduct(); 
      var total = getCount(); 
    
for(var i = 0; i < total; i++) {
      result = result + '<p>' + itemType + '</p>';
}
    
return document.write(result);
}
showOrder(); 