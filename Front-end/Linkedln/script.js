let profileMenu = document.getElementById("profileMenu");
let sidebarActivity = document.getElementById("sidebarActivity");
let showMoreLink = document.getElementById("showMoreLink");

function toggleMenu(){
    profileMenu.classList.toggle("open-menu");
}
function toggleActivity(){
    sidebarActivity.classList.toggle("open-activity");
    if (sidebarActivity.classList.contains("open-activity")){
        showMoreLink.innerHTML = "Show less <b>-</b>";
    }
    else{
        showMoreLink.innerHTML = "Show more <b>+</b>";
    }
}