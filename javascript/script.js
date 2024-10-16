function mobileNav(){
    var menu = document.getElementById("mobile-nav");
    var logo = document.getElementById("page-header");
    if(menu.style.display === "block" && logo.style.display === "none"){
        menu.style.display = "none";
        logo.style.display = "block";
    }else{
        menu.style.display = "block";
        logo.style.display = "none";
        menu.style.borderBottom = "2px solid #000"
    }
}