class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :date, :start, :end
  has_many :users
end
