const neighborhoodForm = document.getElementById("neighborhood-form")
const neighborhoodDiv = document.getElementById("neighborhood-container")

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
            neighborhoodForm.innerHTML = ''
            neighborhoodDiv.innerHTML = ''
            neighborhoodDiv.innerHTML += `
            <h3>${neighborhood.name} Neighborhood</h3> - ${neighborhood.city}, ${neighborhood.zipcode}
            <br><br>
            <a id="back-button" href="#">Back to All Neighborhoods</a>
            `
            const backButton = document.getElementById("back-button")
            backButton.addEventListener('click', goBack)
        })
    }

    function goBack(){
        neighborhoodDiv.innerHTML = ''
        createNeighborhood()
        fetchNeighborhoods()
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
        <ul>
        <li> <h3>${this.name} Neighborhood</h3> - ${this.city}, ${this.zipcode}
        </li>
        </ul>
        <button data-id="${this.id}" onclick="viewNeighborhood()" class="view-neighborhood">View Neighborhood</button>
        `
        // const buttons = document.getElementsByName("button")
        // for (const button of buttons){
        //     button.addEventListener('click', neighborhoodShow)
        // }
    }

   

    // <button data-id="${this.id}" class="add-dog-btn">Add A Dog</button>

    // viewNeighborhood() {
    //     // event.preventDefault();
    //     debugger
    //     console.log("view neighborhood")
    // }
}
