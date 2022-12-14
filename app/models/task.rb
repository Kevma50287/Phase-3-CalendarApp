class Task < ApplicationRecord
    has_many :tasks_joiners, dependent: :destroy
    has_many :users, through: :tasks_joiners
    has_many :groups, through: :tasks_joiners

    validates :start, :end, :title, presence: true

end
