# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Neighborhood.create(name: "Parkwood", city: "Shoreline", zipcode: 98133)
Neighborhood.create(name: "Greentree", city: "Madison", zipcode: 53711)

Dog.create(neighborhood_id: 1, name: "Luke", breed: "labrador", owner: "Brian V", address: "15536 Burke Ave N", comment: "Friendly, happy, playful, loves food")
Dog.create(neighborhood_id: 2, name: "Toby", breed: "lab/beagle mix", owner: "The Kellys", address: "Carol Court", comment: "Exhuberent, likes to chase rabbits and squirels")
Dog.create(neighborhood_id: 1, name: "Emma", breed: "lab mix", owner: "Brian V", address: "15536 Burke Ave N", comment: "She's friendly and loves to explore and roam the neighborhood when she gets out")
