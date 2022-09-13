class TasksJoinerSerializer < ActiveModel::Serializer
  attributes :id, :group_id, :task_id, :user_id
end
