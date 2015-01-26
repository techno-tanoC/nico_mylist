FactoryGirl.define do
  factory :simple_video, class: Video do
    sequence(:title) {|n| "video-title-#{n}" }
    sequence(:url) {|n| "http://www.nicovideo.jp/watch/sm#{13111147 + n}" }
    sequence(:comment) {|n| "video-comment-#{n}" }
  end
end
