
'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ProductSchema = mongoose.Schema({
  project_id: {
    type: Number
},
  status: {
    type: Number
  },
  isbn: {
    type: Number
  },
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  categories: {
    type: String
  },
  pub_date: {
    type: Date
  },
  author_names: {
    type: String
  },
  author_bio: {
    type: String,
  },
  featured_spot: {
    type: String,
  },
  hero_spot: {
    type: String,
  },
  page_count: {
    type: Number,
  },
  illustration_count: {
    type: Number,
  },
  press_release: {
    type: String,
  },
  media_hits: {
    type: Number,
  },
  series: {
    type: Number,
  },
  trim_size: {
    type: String,
  },
  license: {
    type: String,
  },
  image_url: {
    type: String,
  },
  image_description: {
    type: String,
  },
  youtube: {
    type: String,
  },
  year: {
    type: Number
  },
  season: {
    type: String
  },
  additional_categories: {
    type: String
  },
  format: {
    type: String
  },
  release_status: {
    type: String
  },
  video_url: {
    type: String
  },
  video_description: {
    type: String
  },
  sales_price: {
    type: Number
  },
  sales_price_dates_from: {
    type: Date
  },
  sales_price_dates_to: {
    type: Date
  },
  author_names_last_first: {
    type: String,
  },
  hero_url: {
    type: String,
  },
  video_spot: {
    type: String,
  },
  kids_spot: {
    type: String,
  },
  kids_url: {
    type: String,
  },
  collectables_spot: {
    type: String,
  },
  collectables_url: {
    type: String,
  },
  awards_text: {
    type: String,
  },
  awards: {
    type: String,
  },
  keywords: {
    type: String,
  },
  age: {
    type: String,
  },
  assembled_size: {
    type: String,
  },
  brand: {
    type: String,
  },
  pieces: {
    type: Number,
  },
  skill: {
    type: String,
  },
  upc: {
    type: Number,
  }
});

const Products = mongoose.models.Products || mongoose.model('Products', ProductSchema);

module.exports = { Products };