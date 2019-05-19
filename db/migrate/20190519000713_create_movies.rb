class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :rating, null: false
      t.integer :year, null: false

      t.timestamps
    end

    add_index :movies, :title
    add_index :movies, :description
    add_index :movies, :rating
    add_index :movies, :year
  end
end
