json.movie do
    json.extract! @movie, :id, :title, :description, :rating, :year
end