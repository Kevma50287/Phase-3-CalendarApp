class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :description
      t.datetime :date
      t.integer :start_time
      t.integer :end_time

      t.timestamps
    end
  end
end
