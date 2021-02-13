class CreateNeighborhoods < ActiveRecord::Migration[6.0]
  def change
    create_table :neighborhoods do |t|
      t.string :name
      t.string :city
      t.integer :zipcode

      t.timestamps
    end
  end
end
