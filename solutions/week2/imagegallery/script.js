let bigImg = $('.big img');
$('.small img').on('click', function(e) {
  let selectedImg = $(e.target);
  let imgSrc = selectedImg.attr('src');
  bigImg.attr('src', imgSrc); 
});


/***
 * Native solution
 
let bigImg = document.querySelector('.big img');
let smallImages = document.querySelectorAll('.small img');
for (let image of smallImages) {
  image.addEventListener('click', function(e) {
    let selectedImg = e.target;
    let imgSrc = selectedImg.getAttribute('src');
    bigImg.setAttribute('src', imgSrc);
  });
}
*/
