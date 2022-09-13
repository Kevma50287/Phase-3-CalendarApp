require "test_helper"

class UserEventsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_event = user_events(:one)
  end

  test "should get index" do
    get user_events_url, as: :json
    assert_response :success
  end

  test "should create user_event" do
    assert_difference("UserEvent.count") do
      post user_events_url, params: { user_event: { event_id: @user_event.event_id, isAdmin?: @user_event.isAdmin?, user_id: @user_event.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show user_event" do
    get user_event_url(@user_event), as: :json
    assert_response :success
  end

  test "should update user_event" do
    patch user_event_url(@user_event), params: { user_event: { event_id: @user_event.event_id, isAdmin?: @user_event.isAdmin?, user_id: @user_event.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy user_event" do
    assert_difference("UserEvent.count", -1) do
      delete user_event_url(@user_event), as: :json
    end

    assert_response :no_content
  end
end
