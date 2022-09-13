class CreateTasksJoiners < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks_joiners do |t|
      t.integer :group_id
      t.integer :task_id
      t.integer :user_id

      t.timestamps
    end
  end
end
