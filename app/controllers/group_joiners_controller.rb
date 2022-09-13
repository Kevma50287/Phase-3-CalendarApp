class GroupJoinersController < ApplicationController
  before_action :set_group_joiner, only: %i[ show update destroy ]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  # GET /group_joiners
  def index
    @group_joiners = GroupJoiner.all

    render json: @group_joiners
  end

  # GET /group_joiners/1
  def show
    render json: @group_joiner
  end

  # POST /group_joiners
  def create
    @group_joiner = GroupJoiner.new(group_joiner_params)

    if @group_joiner.save
      render json: @group_joiner, status: :created, location: @group_joiner
    else
      render json: @group_joiner.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /group_joiners/1
  def update
    if @group_joiner.update(group_joiner_params)
      render json: @group_joiner
    else
      render json: @group_joiner.errors, status: :unprocessable_entity
    end
  end

  # DELETE /group_joiners/1
  def destroy
    @group_joiner.destroy
    render json: @group_joiner
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_group_joiner
      @group_joiner = GroupJoiner.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def group_joiner_params
      params.require(:group_joiner).permit(:isAdmin?, :user_id, :group_id)
    end

    def render_not_found
      render json: { error: "Group Joiner not found" }, status: 404
    end
end
