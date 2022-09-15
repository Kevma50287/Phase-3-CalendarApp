class User < ApplicationRecord
    has_many :user_events, dependent: :destroy
    has_many :events, through: :user_events
    has_many :group_joiners, dependent: :destroy
    has_many :groups, through: :group_joiners
    has_many :tasks_joiners, dependent: :destroy
    has_many :tasks, through: :tasks_joiners
    has_many :calendars, dependent: :destroy

    validates :username, presence: true, uniqueness: true
    validates :email, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }  
    
    has_secure_password

end
