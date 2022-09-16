class GroupEventsController < ApplicationController
  before_action :set_group_event, only: %i[ show update destroy ]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordNotUnique, with: :render_not_unique

  # GET /group_events
  def index
    @group_events = GroupEvent.all

    render json: @group_events
  end

  # GET /group_events/1
  def show
    render json: @group_event
  end

  # POST /group_events
  def create
    @group_event = GroupEvent.new(group_event_params)

    if @group_event.save
      render json: @group_event, status: :created, location: @group_event
    else
      render json: @group_event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /group_events/1
  def update
    if @group_event.update(group_event_params)
      render json: @group_event
    else
      render json: @group_event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /group_events/1
  def destroy
    @group_event.destroy
    render json: @group_event
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_group_event
      @group_event = GroupEvent.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def group_event_params
      params.require(:group_event).permit(:group_id, :event_id, :isAdmin?)
    end

    def render_not_found
      render json: { error: "Group event not found" }, status: 404
    end

    def render_not_unique
      render json: { error: "This group is already attending this event" }, status: 404
    end
end
