# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Studio.destroy_all

Studio.create(title: "Disney", description: "Disney");
Studio.create(title: "Pixar", description: "Pixar");
Studio.create(title: "Marvel", description: "Marvel");
Studio.create(title: "Lucasfilm", description: "Lucasfilm");
Studio.create(title: "National Geographic", description: "National Geographic");
Studio.create(title: "20th Century Fox", description: "20th Century Fox");