class CreateMylists < ActiveRecord::Migration
  def change
    create_table :mylists do |t|
      t.string :title
      t.string :default_order
      t.text :comment

      t.timestamps null: false
    end
  end
end
