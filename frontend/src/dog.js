


function fetchDogs(){
    fetch(`${BASE_URL}/dogs`)
    .then(resp => resp.json())
    .then(dogs => {
        for (const dog of dogs){
            let d = new Dog(dog.id, dog.name, dog.breed, dog.owner, dog.address, dog.comment, dog.img)
            d.renderDog();
        }
    })
}   

function fetchDogsByNeighborhood(id){
    
    fetch(`${BASE_URL}/neighborhoods/${id}/dogs`)
        .then(resp => resp.json())
        .then(dogs => {
            for (const dog of dogs){
                let d = new Dog(dog.id, dog.name, dog.breed, dog.owner, dog.address, dog.comment, dog.img)
            d.renderDog();
            }
            
        })
    }

function dogFormSubmission(){
    debugger
    event.preventDefault();
    let neighborhood_id = event.target.neighborhood.value
    let name = event.target.name.value
    let breed = event.target.breed.value
    let owner = event.target.owner.value
    let address = event.target.address.value
    let comment = event.target.comment.value
    let img = event.target.image.value

    let dog = {
        name: name,
        breed: breed,
        owner: owner,
        address: address,
        comment: comment,
        img: img,
        neighborhood_id: neighborhood_id
    }

    fetch(`${BASE_URL}/dogs`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(dog)
    })
    .then(resp => resp.json())
    .then(dog => {
        let d = new Dog(dog.id, dog.name, dog.breed, dog.owner, dog.address, dog.comment, dog.img, dog.neighborhood_id)
        d.renderDog()
    })
    event.target.reset()
}   

// function neighborhoodFormSubmission(){
//     event.preventDefault();
//     let name = document.getElementById("name").value
//     let city = document.getElementById("city").value
//     let zipcode = document.getElementById("zipcode").value
 
//     let neighborhood = {
//         name: name,
//         city: city,
//         zipcode: zipcode,
//     }

//     fetch(`${BASE_URL}/neighborhoods`, {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//           body: JSON.stringify(neighborhood)
//     })
//     .then(resp => resp.json())
//     .then(neighborhood => {
//         let n = new Neighborhood(neighborhood.id, neighborhood.name, neighborhood.city, neighborhood.zipcode)
//         n.renderNeighborhood();
//     })
//     event.target.reset()
// }

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
// function dogShow(){
    
//     const id = event.target.dataset.id
    
//     fetch(`${BASE_URL}/dogs/${id}`)
//     .then(resp => resp.json())
//     .then(dog => {
//         DogDiv.innerHTML =''
//         DogDiv.innerHTML += `
//         Name: ${dog.name}
//         Breed: ${dog.breed}
//         Owner: ${dog.owner}
//         Address: ${dog.address}
//         Speical Comment: ${dog.comment}
//         <a id="back-bttn" href="#">Back To Neighborhood Dogs</a>
//         `
        
//         const backBttn = document.getElementById('back-bttn')
//         backBttn.addEventListener('click', dogGoBack)

//     })
// }

// function dogGoBack(){
// debugger
// }

function dogDeleteButton(){
    debugger
    if (event.target.id === "delete button")
        deleteDog(event.target)
    else (event.target.id === "edit button")
        editDogForm(event.target)
    
}

// function editDogForm(element){
//     debugger
// }

function deleteDog(element){
    debugger
    element.parentElement.remove()
        const id = event.target.dataset.id
        fetch(`${BASE_URL}/dogs/${id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(data => alert(data.message))

}

class Dog {
    //remember objects
    // static all = []
    // static dogContainer = document.getElementById('dogs-container')

    constructor(id, name, breed, owner, address, comment, img, neighborhood_id){
        this.id = id;
        this.name = name;
        this.breed = breed;
        this.owner = owner;
        this.address = address;
        this.comment = comment;
        this.img = img;
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
        <div data-id=${this.id} class=dog-card>
        <img data-id=${this.img} class="dog-img" src="${this.img}" /><br>
        Name: <b>${this.name}</b> <br>
        Breed: ${this.breed} <br>
        Owner: ${this.owner} <br>
        Address: ${this.address} <br>
        Special Comments: ${this.comment}<br><br><br>

        <button id="delete button" data-id="${this.id}">Remove Dog From The Neighborhood</button>
        </div>
        `
        const btns = document.querySelectorAll('button')
        for (const btn of btns){
        btn.addEventListener('click', dogDeleteButton)
        }
        // const dogDivs= document.getElementsByClassName('dog-card')    
        // for (const div of dogDivs){
        // div.addEventListener('click', dogShow)
        // }
        
    }

}