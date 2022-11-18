alert ("Welcome Adventurer!!!");
console.log("hello everybody")

function userName() {
 
  let user=prompt ("What is your name???");
  
  while (user === "") {
    user=prompt ("But seriously give me your name")
      
  }
  
  
    console.log(user);
    document.write("Let's begin our adventure!" + user);
  
  
  return user;
  
}

function selectaleaf() {
  let selection = prompt ("How many leaves would you like?");
  while (selection < 1 || selection >5 ) {
    selection = prompt ('Must be between 1-5')
  }
  for (let i = 0; i < selection; i++) {
    console.log(i)
    document.write("<img class='leafselecting' src='images/leaf1.jpg' alt='leaf' />")
  }
}




function exp() {


document.write("Get ready for the experiences of a lifetime "+username+"!!!")

let response = prompt("Do you like the outdoors?")

if (response == "yes") {
    alert("You've come to the right place!");
    document.write("You've come to the right place!");
  } 
  
  else if (response == "no") {
    alert("We have indoor activities too!");
    document.write("We have indoor activities too!");
  } 
  
  else {
    alert("Let's get started...");
    document.write("Let's get started...");
  }
}