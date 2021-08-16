class AddStateToNeighborhood < ActiveRecord::Migration[6.0]
  def change
    add_column :neighborhoods, :state, :string
  end
end
