json.movie do
    json.extract! @movie, :id, :title, :description, :rating, :year, :posterUrl, :bannerUrl, :videoUrl
end