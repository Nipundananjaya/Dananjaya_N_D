var New = document.querySelector(".New");
var nav = document.querySelector(".nav");
var links = document.querySelector(".nav li");


New.addEventListener("click", function(){
  this.classList.New("click");
  nav.classList.New("open")



})
var typed = new typed("input",{
  String:["frontend developer","youtuber","webdeveloper"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
})