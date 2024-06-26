// notification function

document.getElementById('ntf-show').onclick = function(){
  var ntfShow = document.getElementById('ntf-txt');
  var descModification = document.getElementById('desc');

  ntfShow.classList.toggle('show');
  descModification.classList.toggle('modified');

  document.getElementById('ntf-show').classList.add('shake');
  setTimeout(
    function() {
      document.getElementById('ntf-show').classList.remove('shake');
    }, 300);
};