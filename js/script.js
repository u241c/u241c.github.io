//IPO pattern for program design - Input -> Process -> Output
let newsData;
/*---- constants ----*/
let $input = $('.input');
const $name = $('#name');
const BASE_URL = `https://content.guardianapis.com/search?q`;
const API_KEY = '2b824be4-4fc7-4ad4-97e0-efc0ca62410a';
/*---- app's state (variables) ----*/
/*---- cached element references ----*/
const $collection = $('#collection');

/*---- event listeners ----*/

$('form').on('submit', getData);

/*---- functions ----*/

function getData(e){
    e.preventDefault();
    const userInput = $input.val();
    $.ajax(`https://content.guardianapis.com/search?q=${userInput}&api-key=${API_KEY}`)
        .then(function(data){
            console.log('News data: ',data);
            // assign data to globally accessible variable
            newsData = data;
            // upate the DOM with the data
            render();
        },function(error) {
          console.log('error: ',error);
    });
}

function render(){
    const articles = newsData.response.results.map(function(news) {
        console.log(news);
        let $p = $("<a>").text(news.webUrl)
        $p.attr('href', news.webUrl)
        $('.container').append($p)

});
    $collection.html(articles);
}
