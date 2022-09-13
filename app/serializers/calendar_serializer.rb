class CalendarSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :font, :font_size, :font_color, :header_color
end
