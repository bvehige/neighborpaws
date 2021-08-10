
class DogService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getDogs(){
        fetch(`${this.endpoint}/dogs`)
        .then(resp => resp.json())
        .then(dogs => {debugger})

    }

}

//Read Index action

   
