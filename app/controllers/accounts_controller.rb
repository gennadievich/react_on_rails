class AccountsController < ApplicationController
  def index
    @accounts = Account.all
  end

  def create
    @account = Account.new(acc_params)

    if @account.save
      render json: @account
    else
      render json: @account.errors, status: :unprocessable_entity
    end
  end

  private

  def acc_params
    params.require(:account).permit(:title, :amount, :date)
  end
end
