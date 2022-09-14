class UsersController < ApplicationController
  #Session must have a user_id (must be logged in) in order to get, patch, and delete information
  before_action :authorize, only: [:show, :update, :destroy]
  before_action :set_user, only: %i[ show update destroy ]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  #POST /users
  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # GET /users/:user_id
  def show
    user = User.find_by(id: session[:user_id])
    render json: user
  end

   # PATCH/PUT /users/:user_id
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/:user_id
  def destroy
    @user.destroy
    render json: @user
  end

  private

  # Sets up user before get, patch, delete
  def set_user
    @user = User.find_by(id: session[:user_id])
  end

  def authorize
    #If a session cookie does not include a user_id, return an error
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def user_params
    # PW and PW Confirmation automatically converted to password_digest on backend through bcrypt/has_secure_password
    params.permit(:full_name, :username, :email, :password, :password_confirmation, :profile_picture)
  end

  def render_not_found
    render json: { error: "User not found" }, status: 404
  end

end