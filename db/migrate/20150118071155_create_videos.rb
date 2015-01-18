class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title
      t.text :comment
      t.references :mylist, index: true

      t.timestamps null: false
    end
    add_foreign_key :videos, :mylists
  end
end
