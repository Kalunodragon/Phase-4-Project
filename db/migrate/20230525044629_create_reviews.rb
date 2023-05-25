class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.text :thoughts
      t.belongs_to :user
      t.belongs_to :game

      t.timestamps
    end
  end
end
