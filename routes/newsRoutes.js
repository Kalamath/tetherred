const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_KEY);
const express = require("express");
const router = express.Router();

function newsRequest(){
    return newsapi.v2.topHeadlines({
        sources: 'associated-press',
        language: 'en',
    });
}

router.get("/news", function( req, res) {
    // console.log('am i being');
        newsRequest().then(function(data){
            //bring in title, url image, url
            const topNews = data.articles.map(function(article){
                if (article.title){
                return {
                    title: article.title,
                    url: article.url,
                    image: article.urlToImage
                }
                }
            });
            // console.log(topNews); 
            res.json(topNews); 
        }).catch(function(error){
            console.log(error); 
        }); 
  
  
});

module.exports = router; 