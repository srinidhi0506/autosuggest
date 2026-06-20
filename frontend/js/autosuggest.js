//https://autosuggest-backend.onrender.com/api/autosuggest?q=b&weighted=true&algorithm=trie&limit=8
var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";
var searchbar = document.getElementById("search-bar");
var searchsuggestions = document.getElementById("search-suggestions");
//whenever user types a letter this function is called
searchbar.addEventListener("input",function(){
       //1.get the data that user typed
       //2.use user typed data in the query in the api call
       //3.API CALL
       //4.Append all the suggestions in the div tag in UI
       var query = searchbar.value.trim();
       console.log(query);
       fetchsuggestions(query);

       
})
function fetchsuggestions(query){
    var fullApi = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(fullApi)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        //console.log(data);
        showsuggestions(data);
        
    })
    .catch(function(err){
        console.log("Error : "+err);
    })

}
function showsuggestions(data){
    var values = data.results;
    //chk
    if(data.count==0){
        searchsuggestions.innerHTML = "<div>No matching results found</div>"
    }
    else{
        var htmlString = "";
        for(var i=0;i<values.length;i++){
            htmlString+="<div>"+values[i].text+"</div>";
        }
        searchsuggestions.innerHTML=htmlString;
    }
}