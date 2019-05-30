class CreateEpisodes < ActiveRecord::Migration[5.2]
  def change
    create_table :episodes do |t|
      t.references :show, index: true, foreign_key: true
      t.string :title, null: false
      t.text :description, null: false
      t.integer :season, null: false
      t.integer :episode, null: false
      t.string :bannerUrl, null: false

      t.timestamps
    end

    add_index :episodes, :title
    add_index :episodes, :description

  end
end
