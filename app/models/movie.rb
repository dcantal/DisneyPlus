class Movie < ApplicationRecord
    validates :title, :description, :rating, :year, presence: true

end