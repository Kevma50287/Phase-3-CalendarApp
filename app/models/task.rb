class Task < ApplicationRecord
    has_one :tasks_joiner
    has_many :users, through: :tasks_joiner
    has_one :group, through: :tasks_joiner

    validates :start, :end, :title, presence: true

end
