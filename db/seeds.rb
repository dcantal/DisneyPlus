# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Studio.destroy_all
Movie.destroy_all

Studio.create(title: "Disney", description: "Disney", photoUrl: "https://s3.amazonaws.com/disneyplus-dc-seeds/studio_logos/disney-logo.jpg");
Studio.create(title: "Pixar", description: "Pixar", photoUrl: "https://s3.amazonaws.com/disneyplus-dc-seeds/studio_logos/Pixar-logo.jpg");
Studio.create(title: "Marvel", description: "Marvel", photoUrl: "https://s3.amazonaws.com/disneyplus-dc-seeds/studio_logos/marvel-logo-png-transparent.png");
Studio.create(title: "Lucasfilm", description: "Lucasfilm", photoUrl: "https://s3.amazonaws.com/disneyplus-dc-seeds/studio_logos/lucasfilm-logo.png");
Studio.create(title: "National Geographic", description: "National Geographic", photoUrl: "https://s3.amazonaws.com/disneyplus-dc-seeds/studio_logos/national-geographic-logo-dark.png");
Studio.create(title: "20th Century Fox", description: "20th Century Fox", photoUrl: "https://s3.amazonaws.com/disneyplus-dc-seeds/studio_logos/20th-century-fox-logo.jpg");

Movie.create(title: "WALL-E ", description: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.", rating: "G", year: 2008 , posterUrl: "http://www.pixartalk.com/wp-content/uploads/2009/06/wallerussian3.jpg", bannerUrl: "https://images3.alphacoders.com/262/thumb-1920-262977.jpg", videoUrl: "https://s3.amazonaws.com/disneyplus-dc-seeds/movies/wall-e/wall-e-tlr2_h720p.mov");