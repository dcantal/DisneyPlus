class AddVideoUrlToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :videoUrl, :string
    add_column :episodes, :videoUrl, :string
  end
end
