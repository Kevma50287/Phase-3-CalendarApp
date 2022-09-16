class GroupEventSerializer < ActiveModel::Serializer
  attributes :id, :group_id, :event_id, :isAdmin?
end
