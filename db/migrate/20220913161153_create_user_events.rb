class CreateUserEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :user_events do |t|
      t.boolean :isAdmin?
      t.integer :user_id
      t.integer :event_id

      t.timestamps
    end

    #All users in a group should be unique
    add_index :user_events, [:user_id, :event_id], unique: true
  end
end
