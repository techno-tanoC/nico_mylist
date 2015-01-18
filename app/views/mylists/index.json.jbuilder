json.array!(@mylists) do |mylist|
  json.extract! mylist, :id, :title, :default_order, :comment
  json.url mylist_url(mylist, format: :json)
end
