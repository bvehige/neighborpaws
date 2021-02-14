document.addEventListener("DOMContentLoaded", () => {
    fetchNeighborhoods()
})

const BASE_URL = "http://127.0.0.1:3000" 

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

// delete - delete a neighborhood

