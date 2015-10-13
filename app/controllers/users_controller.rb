class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    if @user.save
      log_in(@user)
      render json: "user created!", status: 200
    else
      flash.now[:msg] = @user.errors.full_messages,
                        status: :unprocessible_entity
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
