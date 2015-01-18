FactoryGirl.define do
  factory :simple_mylist, class: Mylist do
    sequence(:title) {|n| "mylist-title-#{n}" }
    default_order "title desc"
    sequence(:comment) {|n| "mylist-comment-#{n}" }
  end
end
