function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5fpq2WI9fr6":
        Script1();
        break;
      case "5jsEUHYTNJ2":
        Script2();
        break;
      case "5yrd7ViGR9k":
        Script3();
        break;
  }
}

function Script1()
{
  // Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbxRn14Yy4zewa-uGW-MlACkVUZESq3dtOdpXnCuiG6j7ZV6rWs9o9Y410kbaubCZZFq8Q/exec"
const player = GetPlayer();
let Name = player.GetVar("Name");
let Duration = player.GetVar("Time"); 
let Score = player.GetVar("Results") // Replace "UserFeedback" with your Storyline Variable.

fetch(url,{
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body:JSON.stringify({text1:Name,text2:Duration,text3:Score})
});
}

function Script2()
{
  // Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbxRn14Yy4zewa-uGW-MlACkVUZESq3dtOdpXnCuiG6j7ZV6rWs9o9Y410kbaubCZZFq8Q/exec";

const player = GetPlayer();
let Name = player.GetVar("Name");
let Duration = player.GetVar("Time"); 
let Score = player.GetVar("Results") // Replace "UserFeedback" with your Storyline Variable.

fetch(url,{
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body:JSON.stringify({text1:Name,text2:Duration,text3:Score})
});
}

function Script3()
{
  // Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbxRn14Yy4zewa-uGW-MlACkVUZESq3dtOdpXnCuiG6j7ZV6rWs9o9Y410kbaubCZZFq8Q/exec";

const player = GetPlayer();
let Name = player.GetVar("Name");
let Duration = player.GetVar("Time"); 
let Score = player.GetVar("Results") // Replace "UserFeedback" with your Storyline Variable.

fetch(url,{
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body:JSON.stringify({text1:Name,text2:Duration,text3:Score})
});
}

