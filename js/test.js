
var d = new Date();
var n = d.getDay();
var titles = ['Go to work: Its Monday', 'Go to work: Its Tuesday', 'Go to work: Its Wednesday', 'Go to work: Its Thursday', 'Go to work: Its Friday', 'You get one free potato from Stalin', 'Revolution Time'];

 

document.getElementById("title").innerHTML = titles[n-1];
document.getElementById("title").style.fontFamily = "verdana,sans-serif";
document.getElementById("title").style.fontSize = "50px";
document.getElementById("title").style.color = "#FFD900";
