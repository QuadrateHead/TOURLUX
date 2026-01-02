document.addEventListener('click', e => {
   if (e.target.classList.contains("fa-questions__title")){
      e.preventDefault();
      e.target.closest(".fa-questions__item").classList.toggle("open");
   }
   if (e.target.classList.contains("fa-questions__question")){
      e.preventDefault();
      e.target.closest(".fa-questions__item").classList.toggle("open");
   }
});