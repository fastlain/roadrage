<<<<<<< HEAD
var imageArr = [{image: 'images/1up.png', message: 'Car ahead of you cut you off on the freeway? Take a few mouthful\'s of this bad boy and go wild. Doesn\'t matter if they\'re seven feet tall with a black belt in brazillian jujitsu, if you go down, you can always get back up with One Up. One Up, the green mushroom under Grandma\'s porch.' }, {image:'images/bananas.png', message: 'Go bananas on your enemy! B! A-N-A-N-A-S! BANANAS!'}, {image: 'images/bananas2.0.png', message: '...more bananas. You know what to do.'}, {image: 'images/blueshell.png', message: 'Target the innocent! Hit the person waaaaaaay way up there. This little winged almagamation of coke and mentos will abosulutely ravage anything it hits!'} , {image: 'images/bob_bomb.png', message: 'Harvest the power of fully automated explosives! You don\'t even need to be angry yet, set the timer and plan accordingly. :)'} , {image:'images/feather.png', message: 'Tickle your foes or make them sneeze or something, y\'know? It\'s a feather. Maybe try rolling again.' } , {image: 'images/greenshell.png', message: 'PETA un-approved rare Galapagos Turtle Shells! Throw these bad boys with the force of a thousand suns! *DISCLAIMER: May or may not contain turtles within shells.'}, {image: 'images/mushroom,png', message: ''}, {image: 'images/redshell.png', message:''}, {image: 'images/star.png', messages: ''}]
=======
var imageArr = [{image: 'images/1up.png', message: '' }, {image:'images/bananas.png', message: ''}, {image: 'images/bananas2.0.png', message: ''}, {image: 'images/blueshell.png', message: ''} , {image: 'images/bob_bomb.png', message: ''} , {image:'images/feather.png', message: '' } , {image: 'images/greenshell.png', message: ''}, {image: 'images/mushroom.png', message: ''}, {image: 'images/redshell.png', message:''}, {image: 'images/star.png', messages: ''}]
>>>>>>> eefd18dd2589a715d556af30acde30da05a34f52

function getRandomImage() {
  var index = Math.floor(Math.random() * imageArr.length);
  var image = imageArr[index];
  return image;
}



$(function() {
  $('#box').click(function() {
    var image = getRandomImage();
    $('.item').attr('src', image.image);
    $('.description').text(image.message);
    console.log( "test" );
    var audio = new Audio('sound/sound.mp3');
    audio.play();
  });
});
