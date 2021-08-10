
class DogService{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getDogs(){
        fetch(`${this.endpoint}/dogs`)
        .then(resp => resp.json())
        .then(dogs => {
            for (const dog of dogs){
                let d = new Dog(dog)
                d.putOnDom()
            }
        })

    }

}

//Read Index action

   
