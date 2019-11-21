const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_KEY);
const express = require("express");
const router = express.Router();
function gossipRequest(){
    return newsapi.v2.topHeadlines({
        category: 'entertainment',
        language: 'en',
        country: 'us'
    })
}
router.get("/entertainment", function( req, res) {
    console.log('am i being');
        gossipRequest().then(function(data){
            console.log(data); 
            //bring in title, url image, url
            const sportsNews = data.articles.map(function(article){
                if (article.title){
                return {
                    title: article.title,
                    url: article.url,
                    image: article.urlToImage
                }
                }
            });
            console.log(sportsNews); 
            res.json(sportsNews); 
        }).catch(function(error){
            console.log(error); 
        }); 
  
  
});
module.exports = router; 