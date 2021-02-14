class Neighborhood {
    constructor(id, name, city, zipcode){
        this.id = id;
        this.name = name;
        this.city = city;
        this.zipcode = zipcode;
    }

//render neighborhood instance method
    renderNeighborhood() {
        let neighborhoodDiv = document.getElementById("neighborhood-container")
        neighborhoodDiv.innerHTML +=
        `
        <ul>
        <li> <h3>${this.name} Neighborhood</h3> - ${this.city}, ${this.zipcode}
        </li>
        </ul>
        `
    }

}