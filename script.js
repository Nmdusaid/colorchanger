const boxes = document.querySelectorAll('.box');
function click(params) {
  const bg = window.getComputedStyle(params.target).backgroundColor;
  document.body.style.backgroundColor = bg;
}
boxes.forEach(box => {
  box.addEventListener('click', click);
});
document.body.addEventListener('click', (e) => {
  
  if (!e.target.classList.contains('box')) {
    // Check if the body's background color is not set
    if (document.body.style.backgroundColor === '') {
      alert('PLEASE CLICK THE GIVEN COLORS');
    }
  }
});
