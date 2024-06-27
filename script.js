// notification function

document.getElementById('ntf-show').onclick = function(event){
  event.stopPropagation();

  var ntfShow = document.getElementById('ntf-txt');
  var descModification = document.getElementById('desc');

  ntfShow.classList.toggle('show');
// notification toggle
if (ntfShow.style.display === 'none' || ntfShow.style.display === '' ) {
  ntfShow.style.display = 'block';
} else {
 ntfShow.style.display = 'none';
 }
 // end of toggle

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

    // //hide ntfShow on clicking any other place 
    document.addEventListener('click', function(event) {
      var ntfShow = document.getElementById('ntf-txt');
      var showNtf = document.getElementById('ntf-show');
      if(!ntfShow.contains(event.target) && !showNtf.contains(event.target)){
        ntfShow.style.display = 'none';
      }
      if (document.getElementById('ntf-show').classList.contains('green')) {
        document.getElementById('ntf-show').classList.remove('green')
        document.getElementById('ntf-show').classList.add('white')
      }
    })
};