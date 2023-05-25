var rect = $('#container')[0].getBoundingClientRect();
var mouse = {x: 0, y: 0, moved: false};

$("#container").mousemove(function(e) {
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});
 
// Ticker event will be called on every frame
TweenLite.ticker.addEventListener('tick', function(){
  if (mouse.moved){    
    parallaxIt("body", 0);
    parallaxIt("h1",-50)
    parallaxIt(".navbar",-50);
    parallaxIt("#surf", -20);
    parallaxIt("#surfBot", -15);
    parallaxIt(".imageContainer",-15);
    parallaxIt(".a_migna",-20);
  }
  mouse.moved = false;
});

function parallaxIt(target, movement) {
  TweenMax.to(target, 0.3, {
    x: (mouse.x - rect.width / 2) / rect.width * movement,
    y: (mouse.y - rect.height / 2) / rect.height * movement
  });
}

$(window).on('resize scroll', function(){
  rect = $('#container')[0].getBoundingClientRect();
})

const changeBtn = document.getElementById('boutton_poppi');
const image = document.getElementById('poppi');

changeBtn.addEventListener('click', function() {
if (image.getAttribute('src') === '../images/poppi.jpg') {
    image.setAttribute('src', '../images/surf.png');
    image.setAttribute('alt', 'Image 2');
} else {
    image.setAttribute('src', '../images/poppi.jpg');
    image.setAttribute('alt', 'Image 1');
}
});