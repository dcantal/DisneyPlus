class Studio < ApplicationRecord
    validates :title, :description, presence: true

end