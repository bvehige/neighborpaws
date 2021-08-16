class AddImgToDogs < ActiveRecord::Migration[6.0]
  def change
    add_column :dogs, :img, :string
  end
end
