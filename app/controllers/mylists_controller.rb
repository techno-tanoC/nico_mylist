class MylistsController < ApplicationController
  before_action :set_mylist, only: [:show, :edit, :update, :destroy]

  respond_to :json

  def index
    @mylists = Mylist.all
    respond_with(@mylists)
  end

  def show
    respond_with(@mylist)
  end

  def new
    @mylist = Mylist.new
    respond_with(@mylist)
  end

  def edit
  end

  def create
    @mylist = Mylist.new(mylist_params)
    @mylist.save
    respond_with(@mylist)
  end

  def update
    @mylist.update(mylist_params)
    respond_with(@mylist)
  end

  def destroy
    @mylist.destroy
    respond_with(@mylist)
  end

  private
    def set_mylist
      @mylist = Mylist.find(params[:id])
    end

    def mylist_params
      params.require(:mylist).permit(:title, :default_order, :comment)
    end
end
