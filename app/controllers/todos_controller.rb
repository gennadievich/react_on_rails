class TodosController < ApplicationController
  def index
    @todos = Todo.all
  end

  def create
    todo = Todo.new(todo_params)
    todo.done = false
    todo.save

    render json: todo
  end

  private

  def todo_params
    params.require(:todo).permit(:title)
  end
end