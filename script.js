document.addEventListener('DOMContentLoaded', function() {
   const buttons = document.querySelectorAll('.drum');

   buttons.forEach(button => {
       button.addEventListener('click', function() {
           playSound(this.getAttribute('data-sound'));
       });
   });

   window.addEventListener('keydown', function(event) {
       const button = document.querySelector(`.drum[data-key="${event.key}"]`);
       if (button) {
           button.classList.add("shrink");
           playSound(button.getAttribute('data-sound'));
       }
   });

   window.addEventListener('keyup', function(event) {
      const button = document.querySelector(`.drum[data-key="${event.key}"]`);
      if (button) {
          button.classList.remove("shrink");
      }
  });

   function playSound(sound) {
      const audio = new Audio(`sounds/${sound}.wav`);
       audio.play();
   }
});
