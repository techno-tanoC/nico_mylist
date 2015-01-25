Rake::Task["db:migrate:reset"].invoke

30.times do |_|
  mylist = FactoryGirl.create(:simple_mylist)
  FactoryGirl.create_list(:simple_video, 5, mylist: mylist)
end
