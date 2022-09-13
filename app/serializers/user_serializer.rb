class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :email, :password, :password_digest, :profile_picture
  has_many :groups
  has_many :tasks
  has_many :events
end

