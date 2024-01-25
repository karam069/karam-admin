let input = document.getElementById("search-input");
let post = document.getElementById("post-txt");
let postComment = document.getElementById("post-comment");


input.onclick = function(){
    input.style.paddingRight = "30px";
}

post.onclick = function(){
    post.style.color = "red";
}
postComment.onclick = function(){
    postComment.style.color = "red";
}
