require "test_helper"

class GroupJoinersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @group_joiner = group_joiners(:one)
  end

  test "should get index" do
    get group_joiners_url, as: :json
    assert_response :success
  end

  test "should create group_joiner" do
    assert_difference("GroupJoiner.count") do
      post group_joiners_url, params: { group_joiner: { group_id: @group_joiner.group_id, isAdmin?: @group_joiner.isAdmin?, user_id: @group_joiner.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show group_joiner" do
    get group_joiner_url(@group_joiner), as: :json
    assert_response :success
  end

  test "should update group_joiner" do
    patch group_joiner_url(@group_joiner), params: { group_joiner: { group_id: @group_joiner.group_id, isAdmin?: @group_joiner.isAdmin?, user_id: @group_joiner.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy group_joiner" do
    assert_difference("GroupJoiner.count", -1) do
      delete group_joiner_url(@group_joiner), as: :json
    end

    assert_response :no_content
  end
end
