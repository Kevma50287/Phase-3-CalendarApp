class TasksJoiner < ApplicationRecord
    belongs_to :task
    belongs_to :group
    belongs_to :user

    #need to validate that each group and user id pair also exists in GroupJoiner
    validate :inGroupJoiners?, :unique_assignment?

    def inGroupJoiners?
        pair = [self.group.id, self.user.id]
        array = GroupJoiner.all.map {|joiner| [joiner.group_id, joiner.user_id]}
        if array.exclude?(pair)
            errors.add(:invalid_pair, "Cannot assign task to user. User is not in group")
        end
    end

end
