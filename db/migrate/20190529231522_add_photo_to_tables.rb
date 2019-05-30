class AddPhotoToTables < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :posterUrl, :string
    add_column :movies, :bannerUrl, :string
  end
end
