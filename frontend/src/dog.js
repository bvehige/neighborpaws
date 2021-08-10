// function fetchDogs() {
//     fetch("http://127.0.0.1:3000/dogs")
//     .then(resp => resp.json())
//     .then(dogs => {
//         for (const dog of dogs){
//             let d = new Dog(dog.id, dog.name, dog.breed, dog.owner, dog.address, dog.comment)
//             d.renderDog();
//         }
//     })
// }   

// function addDog() {
//     let addDogButton = document.getElementsByClassName("add-dog-btn")
//     addDogButton.addEventListener("click", createDog)

// }

// function createDog(){
//     console.log("create Dog")
// }




// class Dog {
//     constructor(id, name, breed, owner, address, comment){
//         this.id = id;
//         this.name = name;
//         this.breed = breed;
//         this.owner = owner;
//         this.address = address;
//         this.comment = comment;
//     }

//     //render dog instance method
//     renderDog() {
//         let DogDiv = document.getElementById("dogs-container")
//         DogDiv.innerHTML +=
//         `
//         <ul>
//         <li> ${this.name}, ${this.breed}, ${this.owner}, ${this.address}, ${this.comment}
//         </li>
//         </ul>
//         `

//     }
// }