const DogDiv = document.getElementById("dogs-container")

const BASE_URL = "http://127.0.0.1:3000"
// const dogService = new DogService(BASE_URL)

fetchNeighborhoods()
createNeighborhood()
// fetchDogs()



// let buttons = document.getElementsByClassName(".view-neighborhood")
// console.log(buttons)
// for (const button of buttons){
//     button.addEventListener("click", () => {
//         debugger;
//     })
// }

//     function fetchNeighborhoods(){
//         fetch(`${BASE_URL}/neighborhoods`)
//         .then(resp => resp.json())
//         .then(neighborhoods => {
//             for (const neighborhood of neighborhoods){
//                 let n = new Neighborhood(neighborhood.id, neighborhood.name, neighborhood.city, neighborhood.zipcode)
//                 n.renderNeighborhood()
//             }
//         })
//     }


// function createNeighborhood(){
//     let neighborhoodForm = document.getElementById("neighborhood-form")

//     neighborhoodForm.innerHTML += 
//     `
//     <b>Create a new Neighborhood</b><br>
//     <form>
//         <label for="name">Name: </label>
//         <input type="text" id="name" value=""><br>
//         <label for="city">City: </label>
//         <input type="text" id="city" value=""><br>
//         <label for="zipcode">Zip Code: </label>
//         <input type="text" id="zipcode" value=""><br>
//         <input type="submit" value ="Create Neighborhood">
//     </form>
//     `
//     neighborhoodForm.addEventListener("submit", neighborhoodFormSubmission)


// } 

// dogService.getDogs()


// document.addEventListener("DOMContentLoaded", () => {
//     createNeighborhood()
//     fetchNeighborhoods()
//     addDog()
// })

 


// function changeDisplay(){
//     let div1 = document.getElementById("neighborhood-form")
//     let div2 = document.getElementById("neighborhood-container")
//     div1.remove()
//     div2.remove()

// }




//     function viewButton(){
//         let views = document.getElementById("view")
//         console.log(views)
//         views.addEventListener("click", changeDisplay)
        // test.innerHTML +=
        // `<button type="button">test button</button>`
    
    // }


// delete - delete a neighborhood
// let buttons = document.querySelectorAll(".delete-btn")
// console.log(buttons)
// for (const button of buttons){
//     button.addEventListener("click", () => {
//         debugger;
//     })
// }

