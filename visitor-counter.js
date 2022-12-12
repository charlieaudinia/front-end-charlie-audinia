function visitorCounter(){ 
  fetch("https://aui3dij8c8.execute-api.us-east-1.amazonaws.com/visitorCounter")
    .then(response => response.text())
    .then((body) => {
    	document.getElementById("visitor-counter").innerHTML=body
    })

}