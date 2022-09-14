class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :start, :end
  has_many :users, through: :tasks_joiners
end
