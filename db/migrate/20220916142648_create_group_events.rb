class CreateGroupEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :group_events do |t|
      t.integer :group_id
      t.integer :event_id
      t.boolean :isAdmin?

      t.timestamps
    end

    #All groups attending an event should be unique
    add_index :group_events, [:group_id, :event_id], unique: true
  end
end
