class CreateStanzas < ActiveRecord::Migration
  def change
    create_table :stanzas do |t|
      t.text :body, null: false
      t.integer :order, null: false
      t.integer :poem_id, null: false
      t.integer :author_id, null: false

      t.timestamps null: false
    end

    add_index :stanzas, :poem_id
    add_index :stanzas, :author_id
  end
end
