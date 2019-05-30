class CreateShowsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :rating, null: false
      t.integer :year, null: false
      t.string :posterUrl, null: false
      t.string :bannerUrl, null: false;

      t.timestamps
    end

    add_index :shows, :title
    add_index :shows, :description
    add_index :shows, :rating
    add_index :shows, :year
  end
end
