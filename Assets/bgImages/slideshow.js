
// Nav Fix
document.querySelector('.navbar').style['margin-bottom'] = 0;

// Slideshow function
const img = document.querySelectorAll('.bgimages'),
  image = document.querySelector('.image');
let num = img.length - 1;

const changeNum = () => {
  if (num === 1) {
    num = img.length - 1;
    img[num].classList.add('fadeIn');
  } else {
    num--
    img[num].classList.add('fadeOut');
  }
}
image.addEventListener('animationend', e => {
  if (e.target.classList.contains('fadeIn')) {
    e.target.classList.remove('fadeIn');
    for (let i = img.length - 1; i !== 1 - 1; i--) {
      img[i].classList.toggle('hidden');
      img[i].classList.remove('fadeOut');

    }
    e.target.classList.add('fadeOut');
    return
  } else {
    e.target.classList.toggle('hidden');
    changeNum()
  }
})

