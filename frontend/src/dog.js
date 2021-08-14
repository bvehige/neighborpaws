


function fetchDogs(){
    fetch(`${BASE_URL}/dogs`)
    .then(resp => resp.json())
    .then(dogs => {
        for (const dog of dogs){
            let d = new Dog(dog.id, dog.name, dog.breed, dog.owner, dog.address, dog.comment)
            d.renderDog();
        }
    })
}   

function fetchDogsByNeighborhood(id){
    
    fetch(`${BASE_URL}/neighborhoods/${id}/dogs`)
        .then(resp => resp.json())
        .then(dogs => {
            for (const dog of dogs){
                let d = new Dog(dog.id, dog.name, dog.breed, dog.owner, dog.address, dog.comment)
            d.renderDog();
            }
            // neighborhoodForm.style.display = "none"
            // h1.style.display = "none"
            // neighborhoodDiv.innerHTML = ''
            // neighborhoodDiv.innerHTML += `
            // <h3>${neighborhood.name} Neighborhood</h3> - ${neighborhood.city}, ${neighborhood.zipcode}
            // <br><br>
            // <a id="back-button" href="#">Back to All Neighborhoods</a>
            // `
            // const backButton = document.getElementById("back-button")
            // backButton.addEventListener('click', goBack)
        })
    }

// function fetchNeighborhoods(){
//     fetch(`${BASE_URL}/neighborhoods`)
//     .then(resp => resp.json())
//     .then(neighborhoods => {
//         for (const neighborhood of neighborhoods){
//             let n =  new Neighborhood(neighborhood.id, neighborhood.name, neighborhood.city, neighborhood.zipcode)
//             n.renderNeighborhood();
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
    // static all = []
    // static dogContainer = document.getElementById('dogs-container')

    constructor(id, name, breed, owner, address, comment, neighborhood_id){
        this.id = id;
        this.name = name;
        this.breed = breed;
        this.owner = owner;
        this.address = address;
        this.comment = comment;
        this.neighborhood_id = neighborhood_id;
        
        // this.element = document.createElement('li')
        // this.element.dataset.id = this.id
        // this.element.id = `dog-${this.id}`

        // Dog.all.push(this)
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

    //render dog instance method
    renderDog() {
        DogDiv.innerHTML +=
        `
        <ul>
        <li> 
        Name: <b>${this.name}</b> <br>
        Breed: ${this.breed} <br>
        Owner: ${this.owner} <br>
        Address: ${this.address} <br>
        Special Comments: ${this.comment}
        </li>
        </ul>
        `
    }

}

// renderNeighborhood() {
//     neighborhoodDiv.innerHTML +=
//     `
//     <div data-id=${this.id} class=neighborhood-card>
//     <h3>${this.name} Neighborhood</h3> - ${this.city}, ${this.zipcode}
//     <button data-id="${this.id}" onclick="viewNeighborhood()" class="view-neighborhood">View Neighborhood</button>
//     <button id = "delete button" data-id="${this.id}"> Delete Neighborhood</button>
//     </div>
//     `
//     // const buttons = document.getElementsByName("button")
//     // for (const button of buttons){
//     //     button.addEventListener('click', neighborhoodShow)
//     // }
//     const bttns = document.querySelectorAll('button')
//     for (const bttn of bttns){
//         bttn.addEventListener('click', deleteButton)
//     }
// }