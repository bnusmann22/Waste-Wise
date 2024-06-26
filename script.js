// notification function

document.getElementById('ntf-show').onclick = function(){
  var ntfShow = document.getElementById('ntf-txt');
  var descModification = document.getElementById('desc');

  ntfShow.classList.toggle('show');
  descModification.classList.toggle('modified');

  document.getElementById('ntf-show').classList.add('shake');
   //toggling the svg color
  if (document.getElementById('ntf-show').classList.contains('green')) {
    document.getElementById('ntf-show').classList.remove('green')
    document.getElementById('ntf-show').classList.add('white')
  } else {
    document.getElementById('ntf-show').classList.remove('white')
    document.getElementById('ntf-show').classList.add('green')
  }
  setTimeout(
    function() {
      document.getElementById('ntf-show').classList.remove('shake');
    }, 300);
};