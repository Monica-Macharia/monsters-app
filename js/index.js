//start coding
//GET with a limit of 50 & display on the DOM
//create a form, POST on the DOM
//event listener to the arrow buton  that GETs moonsters with limits and page

fetch("http://localhost:3000/monsters/?_limit=50&_page=3")
.then(res => res.json())
.then(data => data.map(monster => displayFunction(monster))
)
function displayFunction(monster){
    
    let container = document.querySelector("#monster-container")
    let newDiv = document.createElement("div")

    newDiv.innerHTML = 
        `
        <h4>${monster.name}</h4>
        <p>${monster.age}</p>
        <p>${monster.description}</p>
   
    `
   container.appendChild(newDiv)
    
}


let form= document.querySelector("form")

console.log(form)


//POST AND DISPLAY
let name = document.querySelector("input#name").value
let age = document.querySelector("input#age").value
let description = document.querySelector("input#desc").value


form.addEventListener("submit", function(e){
    e.preventDefault()
    let newObj = {
    name: name,
    age: age,
    description: description
}
   
  
displayFunction(newObj)

   fetch("http://localhost:3000/monsters", {
        method: "POST",
       header: {
        "Content-Type":   "application/json",
        Accept: "application/json" 
   },
        body: newObj
   })
   .then(res => res.json())
   .then(data => console.log(data))
   .catch(error => error.message)

   
 
})

 




