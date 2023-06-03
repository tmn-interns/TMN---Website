const profiles = document.querySelectorAll(".intern-profile");

const numberOfProfile = profiles.length;
var profileNumber = 0;

var playSlider;
var repeater = () => {
  playSlider = setInterval(function () {
    profiles.forEach((profile) => {
      profile.classList.remove("active");
    });
    profileNumber++;

    if (profileNumber > numberOfProfile - 1) {
      profileNumber = 0;
    }
    profiles[profileNumber].classList.add("active");
  }, 5000); // 2000 is equal to 2 section in we want to increase or decrease the delay than we have to just increase or decrease seconds
};
repeater();


$("document").ready(function(){
    $(".nav-item").click(function(){
        var items = $(".nav-item");
        items.each(function(x){
            $(items[x]).removeClass("active");
        });
        $(this).addClass("active");
    })

})