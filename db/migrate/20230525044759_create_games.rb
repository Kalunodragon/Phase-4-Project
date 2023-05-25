class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :game_title
      t.string :platform
      t.boolean :exclusive
      t.integer :release_year

      t.timestamps
    end
  end
end
