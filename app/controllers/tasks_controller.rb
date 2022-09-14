class TasksController < ApplicationController
  before_action :set_task, only: %i[ show update destroy ]
  before_action :authorize, only: %i[ show update destroy ]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  # GET users/:user_id/tasks
  def index
    if session[:user_id]
      user = User.find_by(id: session[:user_id])
      @tasks = user.tasks
    else
      @tasks = Task.all
    end

    render json: @tasks
  end

  # GET /tasks/1
  def show
    render json: @task
  end

  # POST /tasks
  def create
    @task = Task.new(task_params)
    if @task.save
      render json: @task, status: :created
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  def destroy
    @task.destroy
    render json: @task
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      if session[:user_id]
        user = User.find_by(id: session[:user_id])
        @task = user.tasks[params[:id].to_i - 1]
      else
        @task = Task.find(params[:id])
      end
    end

    # Only allow a list of trusted parameters through.
    def task_params
      params.require(:task).permit(:title, :description, :start, :end)
    end

    def render_not_found
      render json: { error: "Task not found" }, status: 404
    end

    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
