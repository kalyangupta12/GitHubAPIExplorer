// Making the HTML elements Dynamic
let getfollowers = document.querySelector(".follower");
let getfollowings = document.querySelector(".followings");
let getbio = document.querySelector(".job");
let getDp = document.querySelector(".profile-img");
let getName = document.querySelector(".name");
// GitHub User Details Fetching
function fetchdetailslive(){
    const requestURL = 'https://api.github.com/users/kalyangupta12';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestURL);
    let follow;
    let followin;
    let bio;
    let dplink;
    let name;
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4){
            const data =JSON.parse(this.responseText);
            follow = data.followers;
            followin = data.following;
            bio = data.bio;
            dplink = data.avatar_url;
            name = data.name;
            getName.innerHTML = name;
            getDp.src = dplink;
            getbio.innerHTML = bio;
            getfollowers.innerHTML = "Followers: " + follow;
            getfollowings.innerHTML = "Following: " + followin;
        }
    }
    xhr.send();
}
//Main function
fetchdetailslive();
//Fetches Live Data every 100 miliseconds
setInterval(fetchdetailslive, 100);