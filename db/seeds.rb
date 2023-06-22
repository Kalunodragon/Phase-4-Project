# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

p "Seeding the database with information from the seed file..."
p "________________________"
p "Creating users"
User.create(user_name:"kaluno", first_name:"Andrew", last_name:"Onulak", email:"test@email.com", password:"testing", image_url:"https://static01.nyt.com/images/2021/09/30/fashion/29melting-face-emoji/29melting-face-emoji-jumbo.jpg?quality=75&auto=webp", bio:"Aspiring Software developer currently in school at Flatirons.")
User.create(user_name:"Met-met", first_name:"Emmett", last_name:"Onulak", email:"test2@email.com", password:"testing2", image_url:"https://static01.nyt.com/images/2021/09/30/fashion/29melting-face-emoji/29melting-face-emoji-jumbo.jpg?quality=75&auto=webp", bio:"Young gamer who enjoys Mario games.")
p "users created"
p "________________________"
p "Creating games"
Game.create(game_title:"Zelda: Tears of the Kingdom", platform:"Nintendo Switch", exclusive: true, release_year: 2023)
Game.create(game_title:"Super Mario U-Deluxe", platform:"Nintendo Switch", exclusive: true, release_year: 2019)
p "games created"
p "________________________"
p "Creating reviews"
Review.create(thoughts:"This game is extreamly fun and enjoyable! It has many hidden easter eggs from other Zelda games. It also has a lot of game mechanics that were added because the deelopers thought they were fun to have.", user_id: 1, game_id: 1)
Review.create(thoughts:"A fun multiplayer game that can be enjoyed by a few people at the same time", user_id: 2, game_id: 2)
p "reviews created"
p "________________________"
p "Finished seeding the database!"