//IPO pattern for program design - Input -> Process -> Output
let newsData;
/*---- constants ----*/
let $input = $('.input');
const BASE_URL = `https://content.guardianapis.com/search?q`;
const API_KEY = '2b824be4-4fc7-4ad4-97e0-efc0ca62410a';
/*---- app's state (variables) ----*/
/*---- cached element references ----*/
/*---- event listeners ----*/

$('form').on('submit', getData);



/*---- functions ----*/


function getData(e){
    console.log("form submitted")
    e.preventDefault();
    const userInput = $input.val();
    $.ajax(`https://content.guardianapis.com/search?q=${userInput}&api-key=${API_KEY}`)
        .then(function(data){
            console.log('News data: ',data);
            newsData = data;
        },function(error) {
          console.log('error: ',error);
    });
}
