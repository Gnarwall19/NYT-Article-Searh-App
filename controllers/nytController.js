const axios = require("axios");
const db = require("../models");

// Define methods for the nytController
// findAll searches the NYT API, then we filter out articles we have already saved
module.exports = {
    findAll: function (req, res) {
        const params = Object.assign({
                api_key: "f50971f100ac405cae4a3bdf6c6d8be8"
            },
            req.query
        );
        axios
            .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
                params
            })
            .then(response => {
                db.Article
                    .find()
                    .then(dbArticles =>
                        response.data.response.docs.filter(article =>
                            dbArticles.every(
                                dbArticle => dbArticle._id.toString() != article._id
                            )
                        )
                    )
                    .then(articles => res.json(articles))
                    .catch(err => res.status(422).json(err));
            });
    }
};