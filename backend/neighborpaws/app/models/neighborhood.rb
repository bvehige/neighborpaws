class Neighborhood < ApplicationRecord
    has_many :dogs, dependent: :destroy
    
end
