class Event < ApplicationRecord
    has_many :user_events
    has_many :users, through: :user_events

    validates :date, :start_time, :end_time, presence: true
    validates :start_time, :end_time, numericality: {in: 0...1440}

end
