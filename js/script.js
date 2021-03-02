//IPO pattern for program design - Input -> Process -> Output

/*---- constants ----*/
let $input = $('#feed');
const BASE_URL = 'https://content.guardianapis.com/search';
const API_KEY = '2b824be4-4fc7-4ad4-97e0-efc0ca62410a';
/*---- app's state (variables) ----*/
/*---- cached element references ----*/
/*---- event listeners ----*/
/*---- functions ----*/

init();
function init(){
    getData();
}

function getData(){
    const userInput = $input.val();
    $input.val('');
    $.ajax(`https://content.guardianapis.com/search?q=${userInput}&api-key=${API_KEY}`)
        .then(function(data){
            console.log('data: ',data);
        },function(error) {
          console.log('error: ',error);
    });
}
