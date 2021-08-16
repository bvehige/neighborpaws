const neighborhoodForm = document.getElementById("neighborhood-form")
const neighborhoodDiv = document.getElementById("neighborhood-container")
const h1 = document.getElementById("h1-neighborhoods")
const btmLink = document.getElementById("bottom-link")

// read - fetch neighborhood index
function fetchNeighborhoods(){
    fetch(`${BASE_URL}/neighborhoods`)
    .then(resp => resp.json())
    .then(neighborhoods => {
        for (const neighborhood of neighborhoods){
            let n =  new Neighborhood(neighborhood.id, neighborhood.name, neighborhood.city, neighborhood.zipcode)
            n.renderNeighborhood();
        }

    })
}


function fetchNeighborhood(id){
    fetch(`${BASE_URL}/neighborhoods/${id}`)
    .then(resp => resp.json())
    .then(neighborhood => {
        let n =  new Neighborhood(neighborhood.id, neighborhood.name, neighborhood.city, neighborhood.zipcode)
            n.renderNeighborhood();
        }
    )
}

// create - create a new neighborhood
function createNeighborhood(){

    neighborhoodForm.innerHTML += 
    `
    <b>Create a new Neighborhood</b><br><br>
    <form>
        <label for="name">Name: </label>
        <input type="text" id="name" value=""><span>
        <label for="city">City: </label>
        <input type="text" id="city" value=""><span>
        <label for="zipcode">Zip Code: </label>
        <input type="text" id="zipcode" value=""><br><br>
        <input type="submit" value ="Create Neighborhood">
    </form>
    `
    neighborhoodForm.addEventListener("submit", neighborhoodFormSubmission)


} 

function neighborhoodFormSubmission(){
        event.preventDefault();
        let name = document.getElementById("name").value
        let city = document.getElementById("city").value
        let zipcode = document.getElementById("zipcode").value
     
        let neighborhood = {
            name: name,
            city: city,
            zipcode: zipcode,
        }

        fetch(`${BASE_URL}/neighborhoods`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
              body: JSON.stringify(neighborhood)
        })
        .then(resp => resp.json())
        .then(neighborhood => {
            let n = new Neighborhood(neighborhood.id, neighborhood.name, neighborhood.city, neighborhood.zipcode)
            n.renderNeighborhood();
        })
        event.target.reset()
    }



    function viewNeighborhood(){
        
        const id = event.target.dataset.id
        

        fetch(`${BASE_URL}/neighborhoods/${id}`)
        .then(resp => resp.json())
        .then(neighborhood => {
            dogForm.style.display ="block"
            neighborhoodForm.style.display = "none"
            h1.style.display = "none"
            neighborhoodDiv.innerHTML = ''
            neighborhoodDiv.innerHTML += `
            <h2><b>${neighborhood.name} Neighborhood</b> - ${neighborhood.city}, ${neighborhood.zipcode}</h2>
            `
            dogForm.innerHTML = `
            <h2>Add A New ${neighborhood.name} Dog</h2>
            <form>
            <input type="hidden" id="neighborhood" value=${neighborhood.id}>
            <label for="name">Dog's Name: </label>
            <input type="text" id="name" value="">
            <label for="breed">Dog's Breed: </label>
            <input type="text" id="breed" value="">
            <label for="owner">Dog's Owner: </label>
            <input type="text" id="owner" value=""><br>
            <label for="address">Dog's Address: </label>
            <textarea id="address" rows="2" cols = "50">
            </textarea><br>
            <label for="comment">Special Comments: </label>
            <textarea id="comment" rows="4" cols="50">
            </textarea>
            <br>
            <input type="submit" value ="Add Dog To The Neighborhood">
            </form>
            `
            dogForm.addEventListener('submit', dogFormSubmission)

            const backButton = document.getElementById("back-button")
            backButton.addEventListener('click', goBack)
            
        })
        const DogDiv = document.getElementById("dogs-container")
            fetchDogsByNeighborhood(id)

        btmLink.innerHTML = `
        <a id="back-button" href="#">Back to All Neighborhoods</a>
        `

    }


    // function fetchNeighborhoodDogs(){
    //     fetch(`${BASE_URL}/neighborhoods/${id}/dogs`)
    //     .then(resp => resp.json())
    //     .then(dogs => Dog)
    // }

    function goBack(){
        neighborhoodForm.style.display = "block"
        h1.style.display ="block"
        neighborhoodForm.innerHTML = ''
        neighborhoodDiv.innerHTML = ''
        DogDiv.innerHTML = ''
        dogForm.style.display ="none"
        createNeighborhood()
        fetchNeighborhoods()
    }

    function deleteButton(){
        if (event.target.id === "delete button")
            deleteNeighborhood(event.target)
    }

    function deleteNeighborhood(element){
        element.parentElement.remove()
        const id = event.target.dataset.id
        fetch(`${BASE_URL}/neighborhoods/${id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(data => alert(data.message))
        // fetchNeighborhoods()
        
    }

class Neighborhood {
    constructor(id, name, city, zipcode){
        this.id = id;
        this.name = name;
        this.city = city;
        this.zipcode = zipcode;
    }

// //render neighborhood instance method
    renderNeighborhood() {
        dogForm.style.display = "none"
        neighborhoodDiv.innerHTML +=
        `
        <div data-id=${this.id} class=neighborhood-card>
        <h3>${this.name} Neighborhood</h3> - ${this.city}, ${this.zipcode}
        <button data-id="${this.id}" onclick="viewNeighborhood()" class="view-neighborhood">View Neighborhood</button>
        <button id = "delete button" data-id="${this.id}"> Delete Neighborhood</button>
        </div>
        `
        // const buttons = document.getElementsByName("button")
        // for (const button of buttons){
        //     button.addEventListener('click', neighborhoodShow)
        // }
        const bttns = document.querySelectorAll('button')
        for (const bttn of bttns){
            bttn.addEventListener('click', deleteButton)
        }

    }

   

    // <button data-id="${this.id}" class="add-dog-btn">Add A Dog</button>

    // viewNeighborhood() {
    //     // event.preventDefault();
    //     debugger
    //     console.log("view neighborhood")
    // }
}
