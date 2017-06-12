let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let ArticleSchema = new Schema ({
    title: {
        type: String
    },
    date: {
        type: String
    },
    url: {
        type: String
    }
});

let Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;