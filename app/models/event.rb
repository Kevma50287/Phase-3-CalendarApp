class Event < ApplicationRecord
    has_many :user_events, dependent: :destroy
    has_many :users, through: :user_events
    has_many :group_events, dependent: :destroy
    has_many :groups, through: :group_events

    validates :start, :end, :title, presence: true

end
