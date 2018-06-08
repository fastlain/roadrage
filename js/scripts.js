

var imageArr = [{image: 'images/1up.png', message: '' }, {image:'images/bananas.png', message: ''}, {image: 'images/bananas2.0.png', message: ''}, {image: 'images/blueshell.png', message: ''} , {image: 'images/bob_bomb.png', message: ''} , {image:'images/feather.png', message: '' } , {image: 'images/greenshell.png', message: ''}, {image: 'images/mushroom,png', message: ''}, {image: 'images/redshell.png', message:''}, {image: 'images/star.png', messages: ''}]

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
  });
});