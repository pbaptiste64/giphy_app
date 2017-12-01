// READ the giphy API docs: https://developers.giphy.com/
const giphy_endpoint = 'http://api.giphy.com/v1/gifs'

//obtain the giphy api key at developer.giphy.com
var giphy_api_key = "VkYHIBXZ7veegUa1r8LQLqapC3YgIHhi"

//select elements for the DOM
var searchForm = document.querySelector('#search-form')
var searchInput = document.querySelector('#search-form input')
var results = document.querySelector('.results')

//we will use axios to help manage our promises and we will use it in a function called getGifs

// breaking down the function: axios is a library to help us deal with promises. we are asking for information from the API
function getGifs(term, path, callback){
    axios(`${giphy_endpoint}/${path}?api_key=${giphy_api_key}&q=${term}`).then(function(res){
        //console.log(res.data.data)
       callback(res.data.data)
    })
}

function displayManyGifs(data){
    data.forEach(function(gif){
        //console.log(gif.url)
        results.innerHTML += `<img class="image" src="${gif.images.preview_gif.url}">`
    })
}
//event handler for submit
searchForm.addEventListener('submit', function(event){
    event.preventDefault()
    if(searchInput === '') return
    results.innerHTML = ""
    getGifs(searchInput.value, "search", displayManyGifs)
})