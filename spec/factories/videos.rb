FactoryGirl.define do
  factory :simple_video, class: Video do
    sequence(:title) {|n| "video-title-#{n}" }
    sequence(:comment) {|n| "video-comment-#{n}" }
  end
end
