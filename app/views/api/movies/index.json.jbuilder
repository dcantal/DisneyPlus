@movies.each do |movie|
    json.set! movie.id do
        json.extract! movie, :id, :title, :description, :rating, :year
    end
end