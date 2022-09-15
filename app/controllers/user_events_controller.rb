class UserEventsController < ApplicationController
  before_action :set_user_event, only: %i[ show update destroy ]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordNotUnique, with: :render_not_unique

  # GET /user_events
  def index
    @user_events = UserEvent.all

    render json: @user_events
  end

  # GET /user_events/1
  def show
    render json: @user_event
  end

  # POST /user_events
  def create
    @user_event = UserEvent.new(user_event_params)

    if @user_event.save
      render json: @user_event, status: :created, location: @user_event
    else
      render json: @user_event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_events/1
  def update
    if @user_event.update(user_event_params)
      render json: @user_event
    else
      render json: @user_event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_events/1
  def destroy
    @user_event.destroy
    render json: @user_event
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_event
      @user_event = UserEvent.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_event_params
      params.require(:user_event).permit(:isAdmin?, :user_id, :event_id)
    end

    def render_not_found
      render json: { error: "User event not found" }, status: 404
    end

    def render_not_unique
      render json: { error: "This user is already attending this event" }, status: 404
    end
end
