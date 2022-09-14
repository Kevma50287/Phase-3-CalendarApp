class CreateTasksJoiners < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks_joiners do |t|
      t.integer :group_id
      t.integer :task_id
      t.integer :user_id

      t.timestamps
    end

    # validation of group and user pair - All users in a group should be unique
    add_index :tasks_joiners, [:user_id, :group_id, :task_id], unique: true

  end
end
