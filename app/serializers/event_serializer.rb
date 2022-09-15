class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :start, :end
  has_many :users
end
