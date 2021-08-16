class Dog {
   
    constructor(id, name, breed, owner, address, comment, img, neighborhood_id){
        this.id = id;
        this.name = name;
        this.breed = breed;
        this.owner = owner;
        this.address = address;
        this.comment = comment;
        this.img = img;
        this.neighborhood_id = neighborhood_id;
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
    }
}

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


function dogDeleteButton(){
    if (event.target.id === "delete button")
        deleteDog(event.target)
    else (event.target.id === "edit button")
        editDogForm(event.target)
}


function deleteDog(element){
    element.parentElement.remove()
        const id = event.target.dataset.id
        fetch(`${BASE_URL}/dogs/${id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(data => alert(data.message))
}

