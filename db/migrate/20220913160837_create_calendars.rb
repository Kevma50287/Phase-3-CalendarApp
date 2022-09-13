class CreateCalendars < ActiveRecord::Migration[7.0]
  def change
    create_table :calendars do |t|
      t.integer :user_id
      t.string :font
      t.string :font_size
      t.string :font_color
      t.string :header_color

      t.timestamps
    end
  end
end
