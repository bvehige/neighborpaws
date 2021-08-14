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
    <b>Create a new Neighborhood</b><br>
    <form>
        <label for="name">Name: </label>
        <input type="text" id="name" value=""><br>
        <label for="city">City: </label>
        <input type="text" id="city" value=""><br>
        <label for="zipcode">Zip Code: </label>
        <input type="text" id="zipcode" value=""><br>
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
            neighborhoodForm.style.display = "none"
            h1.style.display = "none"
            neighborhoodDiv.innerHTML = ''
            neighborhoodDiv.innerHTML += `
            <ul>
            <h2>${neighborhood.name} Neighborhood</h2>
            <h3>${neighborhood.city}, ${neighborhood.zipcode}</h3>
            </ul>
            `
            btmLink.innerHTML = `
            <a id="back-button" href="#">Back to All Neighborhoods</a>
            `
            const backButton = document.getElementById("back-button")
            backButton.addEventListener('click', goBack)
            
        })
        const DogDiv = document.getElementById("dogs-container")
            fetchDogsByNeighborhood(id)
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
