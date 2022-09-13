require "test_helper"

class TasksJoinersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tasks_joiner = tasks_joiners(:one)
  end

  test "should get index" do
    get tasks_joiners_url, as: :json
    assert_response :success
  end

  test "should create tasks_joiner" do
    assert_difference("TasksJoiner.count") do
      post tasks_joiners_url, params: { tasks_joiner: { group_id: @tasks_joiner.group_id, task_id: @tasks_joiner.task_id, user_id: @tasks_joiner.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show tasks_joiner" do
    get tasks_joiner_url(@tasks_joiner), as: :json
    assert_response :success
  end

  test "should update tasks_joiner" do
    patch tasks_joiner_url(@tasks_joiner), params: { tasks_joiner: { group_id: @tasks_joiner.group_id, task_id: @tasks_joiner.task_id, user_id: @tasks_joiner.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy tasks_joiner" do
    assert_difference("TasksJoiner.count", -1) do
      delete tasks_joiner_url(@tasks_joiner), as: :json
    end

    assert_response :no_content
  end
end
