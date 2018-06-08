$( document ).ready(function() {
  $("#box").click(function() {
    console.log( "test" );
    var audio = new Audio('sound/sound.mp3');
    audio.play();

});
});
