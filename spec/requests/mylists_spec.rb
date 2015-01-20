require 'rails_helper'

describe "Mylists" do
  describe "GET /index" do
    before do
      FactoryGirl.create(:simple_mylist)
      get "/mylists", format: "json"
      @json = JSON.parse(response.body)
    end

    it "returns 200 OK" do
      expect(response).to be_success
    end

    it "returns json" do
    end
  end
end
