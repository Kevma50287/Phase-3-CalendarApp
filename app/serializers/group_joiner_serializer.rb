class GroupJoinerSerializer < ActiveModel::Serializer
  attributes :id, :isAdmin?, :user_id, :group_id
end
