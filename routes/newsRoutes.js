const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_KEY);

function newsRequest(){
    console.log(newsapi);
    return newsapi.v2.topHeadlines({
        sources: 'associated-press',
        language: 'en',
    });
}
module.exports = function (app) {
    app.get("/api/news", function (req, res){
        newsRequest().then(function(data){
            //bring in title, url image, url
            const topNews = data.articles.map(function(article){
                return {
                    title: article.title,
                    url: article.url,
                    image: article.urlToImage
                }
            
            });
            console.log(topNews); 
            res.json(topNews); 
        }); 
    }); 
}; 