json.array!(@videos) do |video|
  json.extract! video, :id, :title, :comment, :mylist_id
  json.url video_url(video, format: :json)
end
