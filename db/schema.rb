# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_30_002746) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "episodes", force: :cascade do |t|
    t.bigint "show_id"
    t.string "title", null: false
    t.text "description", null: false
    t.integer "season", null: false
    t.integer "episode", null: false
    t.string "bannerUrl", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "videoUrl"
    t.index ["description"], name: "index_episodes_on_description"
    t.index ["show_id"], name: "index_episodes_on_show_id"
    t.index ["title"], name: "index_episodes_on_title"
  end

  create_table "movies", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.string "rating", null: false
    t.integer "year", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "posterUrl"
    t.string "bannerUrl"
    t.string "videoUrl"
    t.index ["description"], name: "index_movies_on_description"
    t.index ["rating"], name: "index_movies_on_rating"
    t.index ["title"], name: "index_movies_on_title"
    t.index ["year"], name: "index_movies_on_year"
  end

  create_table "shows", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.string "rating", null: false
    t.integer "year", null: false
    t.string "posterUrl", null: false
    t.string "bannerUrl", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["description"], name: "index_shows_on_description"
    t.index ["rating"], name: "index_shows_on_rating"
    t.index ["title"], name: "index_shows_on_title"
    t.index ["year"], name: "index_shows_on_year"
  end

  create_table "studios", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "photoUrl"
    t.index ["title"], name: "index_studios_on_title"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username"
  end

  add_foreign_key "episodes", "shows"
end
