class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :email, :profile_picture
  has_many :groups
  has_many :tasks
  has_many :events
end

