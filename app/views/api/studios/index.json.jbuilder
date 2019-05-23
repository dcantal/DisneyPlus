@studios.each do |studio|
    json.set! studio.id do
        json.extract! studio, :id, :title, :description
    end
end