class TasksJoinersController < ApplicationController
  before_action :set_tasks_joiner, only: %i[ show update destroy ]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordNotUnique, with: :render_not_unique

  # GET /tasks_joiners
  def index
    @tasks_joiners = TasksJoiner.all

    render json: @tasks_joiners
  end

  # GET /tasks_joiners/1
  def show
    render json: @tasks_joiner
  end

  # POST /tasks_joiners
  def create
    @tasks_joiner = TasksJoiner.new(tasks_joiner_params)

    if @tasks_joiner.save
      render json: @tasks_joiner, status: :created, location: @tasks_joiner
    else
      render json: @tasks_joiner.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks_joiners/1
  def update
    if @tasks_joiner.update(tasks_joiner_params)
      render json: @tasks_joiner
    else
      render json: @tasks_joiner.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks_joiners/1
  def destroy
    @tasks_joiner.destroy
    render json: @tasks_joiner
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tasks_joiner
      @tasks_joiner = TasksJoiner.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tasks_joiner_params
      params.require(:tasks_joiner).permit(:group_id, :task_id, :user_id)
    end

    def render_not_found
      render json: { error: "Tasks Joiner not found" }, status: 404
    end

    def render_not_unique
      render json: { error: "This task has already been assigned to this user and group" }, status: 404
    end
end
