class AddCompletedToTodos < ActiveRecord::Migration[5.0]
  def change
    add_column :todos, :completed, :boolean, default: false
  end
end
