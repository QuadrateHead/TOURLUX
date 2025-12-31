let replyED = false;
let replyTarget = null;

document.addEventListener('click', e => {
   if(e.target.classList.contains("sb-comments__reply")){
      e.preventDefault();
      replyED = true;
      replyTarget = e.target.closest(".sb-comments__item")
   }
});

document.getElementById("sbCommentForm").addEventListener('submit', function(e){
   e.preventDefault();
   
   const name = this.name.value;
   const message = this.message.value;
   const date = new Date().toLocaleDateString();

   const comment1 = `
            <div class="sb-comments__item" id = "sb-commentsItem">
               <img src="" alt="Avatar Picture" class="sb-comments__avatar">
               <div class="sb-comments__content">
                  <div class="sb-comments__info">
                     <div class="sb-comments__profile">
                     <h4 class = "sb-comments__name">${name}</h4>
                     <span class = "sb-comments__date">${date}</span>
                  </div>
                  <a id = "sb-reply" class = "sb-comments__reply" href="#">Reply</a>
                  </div>
                  <div class="sb-comments__message"> ${message}

                  </div>
               </div>
            </div>
            <div class="line" style="height: 1px; width: 100%; background: rgba(155, 163, 176, 0.2);"></div>`;
      const comment2 = `
            <div class="sb-comments__item" id = "sb-commentsItem">
               <img src="" alt="Avatar Picture" class="sb-comments__avatar">
               <div class="sb-comments__content">
                  <div class="sb-comments__info">
                     <div class="sb-comments__profile">
                     <h4 class = "sb-comments__name">${name}</h4>
                     <span class = "sb-comments__date">${date}</span>
                  </div>
                  <a id = "sb-reply" class = "sb-comments__reply" href="#">Reply</a>
                  </div>
                  <div class="sb-comments__message"> ${message}

                  </div>
               </div>
            </div>`;      

   if(replyED && replyTarget){
      replyTarget.querySelector(".sb-comments__content .sb-comments__message").insertAdjacentHTML("beforeend", comment2);
   } else{
      sbCommentsList.insertAdjacentHTML("afterbegin", comment1);
   }
   replyED = false;
   replyTarget = null;
   this.reset();
});









