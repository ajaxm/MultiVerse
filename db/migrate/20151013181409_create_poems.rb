class CreatePoems < ActiveRecord::Migration
  def change
    create_table :poems do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.integer :num_stanzas, null: false, default: 6

      t.timestamps null: false
    end

    add_index :poems, :title
    add_index :poems, :author_id
  end
end
