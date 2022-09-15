# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

10.times do
    User.create!(
      full_name: Faker::Name.unique.name,
      username: Faker::Name.unique.name,
      password: "happy",
      password_confirmation: "happy",
      email: Faker::Internet.email,
      profile_picture: "https://protkd.com/wp-content/uploads/2017/04/default-image.jpg"
    )
end

10.times do
    start = Faker::Time.between_dates(from: Date.today, to: Date.today + 300, period: :all)
    Event.create!(
        title: Faker::Lorem.word,
        description: Faker::Lorem.sentence(word_count: 10),
        start: start,
        end: Faker::Time.between_dates(from: start, to: start + 3, period: :all),
        allDay: true
    )
end

10.times do
    event_id = Event.all.sample().id
    event_users = Event.find(event_id).users.map{|user| user.id}
    user_id = User.pluck(:id).select{|id| event_users.exclude?(id)}.sample()
    
    UserEvent.create!(
        isAdmin?: false,
        user_id: user_id,
        event_id: event_id
    )
end

4.times do
    Group.create!(
        title: Faker::Lorem.word,
        group_picture:"https://protkd.com/wp-content/uploads/2017/04/default-image.jpg"
    )
end

10.times do
    group_id = Group.all.sample().id
    group_users = Group.find(group_id).users.map{|user| user.id}
    user_id = User.pluck(:id).select{|id| group_users.exclude?(id)}.sample()

    GroupJoiner.create!(
        isAdmin?: false,
        user_id: user_id,
        group_id: group_id
    )
end

15.times do
    start = Faker::Time.between_dates(from: Date.today, to: Date.today + 300, period: :all)
    Task.create!(
        title: Faker::Lorem.word,
        description: Faker::Lorem.sentence(word_count: 10),
        start: start,
        end: Faker::Time.between_dates(from: start, to: start + 3, period: :all)
    )
end

# For every task we need a Task joiner 
Task.all.each do |task|
    array = GroupJoiner.all.map {|joiner| [joiner.group_id, joiner.user_id]}
    sample = array.sample()
    TasksJoiner.create!(
        task_id: task.id,
        user_id: sample[1],
        group_id: sample[0]
    )
end

User.all.each do |user|
    Calendar.create!(
        user_id: user.id,
        font: "Arial",
        font_size: 12,
        font_color: "Black",
        header_color: "Black"
    )
end
