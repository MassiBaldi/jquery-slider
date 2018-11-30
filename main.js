$('.frecciadx').click(function(){
  //alert('ciao');
  prossimaFoto();
});

function prossimaFoto() {
  var imgActive = $('.wrap img.active');
  var palliniActive = $('.pallini i.active');

  imgActive.removeClass('active');
  palliniActive.removeClass('active');

  var nextImg = imgActive.next('img');
  var nextPallini = palliniActive.next('i');

  if (nextImg.length != 0) {
    nextImg.addClass('active');
    nextPallini.addClass('active');
  }
  else {
    $('.wrap img').first().addClass('active');
    $('.pallini i').first().addClass('active');
  }
}

$('.frecciasx').click(function(){
  //alert('ciao');
  indietroFoto()
});

function indietroFoto() {
  var imgActive = $('.wrap img.active');
  imgActive.removeClass('active');
  var palliniActive = $('.pallini i.active');
  palliniActive.removeClass('active');

  var prevImg = imgActive.prev('img')

  if (prevImg.length != 0){
    prevImg.addClass('active');
    palliniActive.prev('i').addClass('active');
  }
  else {
    $('.wrap img').last().addClass('active');
    $('.pallini i').last().addClass('active');
  }
}

//Se premo il tasto f le foto vanno indietro Se invece premo j le foto vanno avanti
$(document).keypress(function(event) {
  // console.log(event.which);
  if (event.which == 102) {
    prossimaFoto();
  }
  else if (event.which == 106) {
    indietroFoto();
  }
});
