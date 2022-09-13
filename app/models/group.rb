class Group < ApplicationRecord
    has_many :group_joiners, dependent: :destroy
    has_many :users, through: :group_joiners
    has_many :user_events, through: :users
    has_many :events, through: :user_events
    has_many :tasks_joiners, dependent: :destroy
    has_many :tasks, through: :tasks_joiners

    validates :title, uniqueness: true

end
