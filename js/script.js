var preloader = document.getElementById("preloader");
    window.addEventListener("load",function(){
      preloader.style.display = "none";
})

const text = ['Computer Science Undergraduate', 'Developer', 'Coder'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0,++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count ++;
        index = 0;
    }
    setTimeout(type,200);
})();
