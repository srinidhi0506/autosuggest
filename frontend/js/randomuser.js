function randomuser(){
    //converting rawdata to json
    fetch("https://randomuser.me/api/")
    .then(function(res) {
        return  res.json()
    })
    //fetching the above data
    .then(function(data){
        var user = data.results[0];
        var fullName = user.name.title+" "+user.name.first+" "+user.name.last;
         document.getElementById("userimg").src=user.picture.large;
         document.getElementById("username").innerText=fullName;
         document.getElementById("usergender").innerText=user.gender;
    })
    //if api doesnt work
    .catch(function(err) {
        console.log("Error : "+err)
    })
}