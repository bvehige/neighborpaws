class CreateDogs < ActiveRecord::Migration[6.0]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :breed
      t.string :owner
      t.string :address
      t.text :comment
      t.belongs_to :neighborhood

      t.timestamps
    end
  end
end
