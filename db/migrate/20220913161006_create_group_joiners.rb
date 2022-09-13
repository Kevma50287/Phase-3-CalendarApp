class CreateGroupJoiners < ActiveRecord::Migration[7.0]
  def change
    create_table :group_joiners do |t|
      t.boolean :isAdmin?
      t.integer :user_id
      t.integer :group_id

      t.timestamps
    end
  end

  # validation of group and user pair - All users in a group should be unique
  add_index :group_joiners, [:user_id, :group_id], unique: true
  
end
