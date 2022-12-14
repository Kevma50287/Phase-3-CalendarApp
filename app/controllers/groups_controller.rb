class GroupsController < ApplicationController
  before_action :set_group, only: %i[ show update destroy ]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  # GET /groups
  def index
    if session[:user_id]
      user = User.find_by(id: session[:user_id])
      @groups = user.groups
    else
      @groups = Group.all
    end

    render json: @groups
  end

  # GET /groups/1
  def show
    render json: @group
  end

  # POST /groups
  def create
    @group = Group.new(group_params)

    if @group.save
      render json: @group, status: :created, location: @group
    else
      render json: @group.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /groups/1
  def update
    if @group.update(group_params)
      render json: @group
    else
      render json: @group.errors, status: :unprocessable_entity
    end
  end

  # DELETE /groups/1
  def destroy
    @group.destroy
    render json: @group
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_group
      # if session[:user_id]
      #   user = User.find_by(id: session[:user_id])
      #   @group = user.groups[params[:id].to_i - 1]
      # else
      if params[:group_id]
        @group = Group.find(params[:group_id])
      else
        @group = Group.find(params[:id])
      end

      # end
    end

    # Only allow a list of trusted parameters through.
    def group_params
      params.require(:group).permit(:title, :group_picture)
    end

    def render_not_found
      render json: { error: "Group not found" }, status: 404
    end
end
