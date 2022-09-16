class CreateGroupEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :group_events do |t|
      t.integer :group_id
      t.integer :event_id
      t.boolean :isAdmin?

      t.timestamps
    end
  end
end
