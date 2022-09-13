class GroupSerializer < ActiveModel::Serializer
  attributes :id, :title, :group_picture
  has_many :users
  has_many :tasks
end
