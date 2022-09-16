require "test_helper"

class GroupEventsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @group_event = group_events(:one)
  end

  test "should get index" do
    get group_events_url, as: :json
    assert_response :success
  end

  test "should create group_event" do
    assert_difference("GroupEvent.count") do
      post group_events_url, params: { group_event: { event_id: @group_event.event_id, group_id: @group_event.group_id, isAdmin?: @group_event.isAdmin? } }, as: :json
    end

    assert_response :created
  end

  test "should show group_event" do
    get group_event_url(@group_event), as: :json
    assert_response :success
  end

  test "should update group_event" do
    patch group_event_url(@group_event), params: { group_event: { event_id: @group_event.event_id, group_id: @group_event.group_id, isAdmin?: @group_event.isAdmin? } }, as: :json
    assert_response :success
  end

  test "should destroy group_event" do
    assert_difference("GroupEvent.count", -1) do
      delete group_event_url(@group_event), as: :json
    end

    assert_response :no_content
  end
end
