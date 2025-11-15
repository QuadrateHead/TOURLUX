const block = document.querySelector('.details__numofper');
const input = block.querySelector('.details__numofper-input');
const arrow = block.querySelector('.details__numofper-arrow');
const list = block.querySelectorAll('.details__numofper-listitem');

arrow.addEventListener('click', () => {
   block.classList.toggle('open');
});

list.forEach(listitem => {
   listitem.addEventListener('click', () => {
      input.value = listitem.textContent;
      block.classList.remove('open');
   });
});

document.addEventListener('click',(e) => {
   if(!block.contains(e.target)) {
      block.classList.remove('open')
   };
});