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
// create - create a new neighborhood
function createNeighborhood(){
    let neighborhoodForm = document.getElementById("neighborhood-form")

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
        let neighborhoodDiv = document.getElementById("neighborhood-container")
        neighborhoodDiv.innerHTML +=
        `
        <ul>
        <li> <h3>${this.name} Neighborhood</h3> - ${this.city}, ${this.zipcode}
        </li>
        </ul>
        <button data-id="${this.id}" class="add-dog-btn">Add A Dog</button>
        `
    }

    // showNeighborhood() {
    //     event.preventDefault();
    //     console.log("show neighborhood")
    // }

}