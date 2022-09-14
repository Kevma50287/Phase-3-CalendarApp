class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :description

      #For start date and end date
      #Time format (YYYY:MM:DD)T(hh:mm:ss)
      t.datetime :start
      t.datetime :end

      t.boolean :allDay

      t.timestamps
    end
  end
end
