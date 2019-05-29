class AddPhotoUrlToStudios < ActiveRecord::Migration[5.2]
  def change
    add_column :studios, :photoUrl, :string
  end
end
