class EventsController < ApplicationController
  before_action :set_event, only: %i[ show update destroy ]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  # GET /events
  def index
    if session[:user_id]
      user = User.find_by(id: session[:user_id])
      @events = user.events
    else
      @events = Event.all
    end

    render json: @events
  end

  # GET /events/1
  def show
    render json: @event
  end

  # POST /events
  def create
    @event = Event.new(event_params)

    if @event.save
      render json: @event, status: :created, location: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    @event.destroy
    render json: @event
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
        @event = Event.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_params
      params.require(:event).permit(:title, :description, :allDay, :start, :end, :id)
    end

    def render_not_found
      render json: { error: "Event not found" }, status: 404
    end

end
