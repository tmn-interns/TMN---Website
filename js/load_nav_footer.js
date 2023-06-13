$(function(){
    $("#nav-placeholder").load("/files/navbar.html");
});

$(function(){
    $("#footer-placeholder").load("/files/footer.html");
});

window.setTimeout(function(){
    var items = $(".nav-item");
    items[nav_item_idx].classList.add("active");
    }, 100);
