class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description

      #Time format (YYYY:MM:DD) (hh:mm:ss)
      t.datetime :start
      t.datetime :end

      t.timestamps
    end
  end
end
