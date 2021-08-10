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




class Dog {
    //remember objects
    static all = []
    static dogContainer = document.getElementById('dogs-container')

    constructor(id, name, breed, owner, address, comment, neighborhood_id){
        this.id = id;
        this.name = name;
        this.breed = breed;
        this.owner = owner;
        this.address = address;
        this.comment = comment;
        this.neighborhood_id = neighborhood_id;
        
        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `dog-${this.id}`

        Dog.all.push(this)
    }

    dogHTML(){
        this.element.innerHTML += `
        <div>
            <h3>${this.name}</h3>
            <li>
            ${this.breed}
            ${this.owner}
            ${this.address}
            ${this.comment}
            </li>
        </div>
        `
        return this.element
    }

    putOnDom(){
        Dog.dogContainer.appendChild(this.dogHTML())
    }
}

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