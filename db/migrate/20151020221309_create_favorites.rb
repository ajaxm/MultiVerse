class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :poem_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :favorites, :poem_id
    add_index :favorites, [:user_id, :poem_id], unique: true
  end
end
