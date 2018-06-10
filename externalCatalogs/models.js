
'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const ExternalSchema = mongoose.Schema({
    externalCatalogs: [{
        project_id: {
            type: String
        },
        status: {
            type: String
        },
        isbn: {
            type: String
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
            type: String
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
            type: String,
        },
        illustration_count: {
            type: String,
        },
        press_release: {
            type: String,
        },
        media_hits: {
            type: String,
        },
        series: {
            type: String,
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
            type: String
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
            type: String
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
            type: String,
        },
        skill: {
            type: String,
        },
        upc: {
            type: String,
        }
    }]
});

const ExternalCatalogs = mongoose.models.ExternalCatalogs || mongoose.model('ExternalCatalogs', ExternalSchema);

module.exports = { ExternalCatalogs };