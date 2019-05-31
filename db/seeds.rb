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

Movie.create(title: "WALL-E", description: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.", rating: "G", year: 2008 , posterUrl: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg", bannerUrl: "https://images3.alphacoders.com/262/thumb-1920-262977.jpg", videoUrl: "https://s3.amazonaws.com/disneyplus-dc-seeds/movies/wall-e/wall-e-tlr2_h720p.mov");
Movie.create(title: "Bambi", description: "The story of a young deer growing up in the forest.", rating: "G", year: 1942 , posterUrl: "https://m.media-amazon.com/images/M/MV5BMTY1NzM4NDg5MV5BMl5BanBnXkFtZTgwMjI1MTkzMjE@._V1_SY1000_CR0,0,666,1000_AL_.jpg", bannerUrl: "https://wallpaperplay.com/walls/full/8/c/8/300334.jpg", videoUrl: "https://s3.amazonaws.com/disneyplus-dc-seeds/movies/bambi/bambi-trailer-720p-HDTN.mp4");
Movie.create(title: "Mary Poppins Returns", description: "Decades after her original visit, the magical nanny returns to help the Banks siblings and Michael's children through a difficult time in their lives.", rating: "PG", year: 2018 , posterUrl: "https://m.media-amazon.com/images/M/MV5BMjQxNjE3NjYxN15BMl5BanBnXkFtZTgwMTk2NDQ3NjM@._V1_SY1000_SX700_AL_.jpg", bannerUrl: "https://wallpapersite.com/images/pages/pic_h/16802.jpg", videoUrl: "https://s3.amazonaws.com/disneyplus-dc-seeds/movies/mary_poppins_returns/mary-poppins-trailer-2_h720p.mov");
Movie.create(title: "Star Wars: The Rise of Skywalker ", description: "The surviving Resistance faces the First Order once more in the final chapter of the Skywalker saga.", rating: "PG-13", year: 2019 , posterUrl: "https://m.media-amazon.com/images/M/MV5BNDA5YWU1MDItOWZlOS00YTljLThhYTYtMzM4MGI2NjhlMDYwXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SY1000_SX675_AL_.jpg", bannerUrl: "https://s3.amazonaws.com/disneyplus-dc-seeds/movies/the_rise_skywalker/wallpapersden.com_star-wars-jedi-the-rise-of-skywalker-art_4000x1663.jpg", videoUrl: "https://s3.amazonaws.com/disneyplus-dc-seeds/movies/the_rise_skywalker/star-wars-the-rise-of-skywalker-trailer-1_h720p.mov");
Movie.create(title: "Avengers: Endgame", description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.", rating: "PG-13", year: 2019 , posterUrl: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg", bannerUrl: "https://i.redd.it/w4botl43ntm21.png", videoUrl: "https://s3.amazonaws.com/disneyplus-dc-seeds/movies/avengers_endgame/avengers-endgame-trailer-2_h720p.mov");