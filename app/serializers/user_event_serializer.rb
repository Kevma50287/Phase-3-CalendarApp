class UserEventSerializer < ActiveModel::Serializer
  attributes :id, :isAdmin?, :user_id, :event_id
end
