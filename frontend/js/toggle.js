var users = [
 {
    "name" : "John Doe",
    "gender" : "male",
    "image" : "/images/john.png"
 },
 {
    "name" : "Jane Doe",
    "gender": "female",
    "image" : "/images/jane.png"
 }
]
var curId = 0; 
function toggle(){
    curId+=1;
    curId%=2;
    //toggle the rendered elements
    var user = users[curId];
    document.getElementById("userimg").src=user.image;
    document.getElementById("username").innerText=user.name;
    document.getElementById("usergender").innerText=user.gender;
}