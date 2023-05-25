class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.string :image_url
      t.text :bio

      t.timestamps
    end
  end
end
