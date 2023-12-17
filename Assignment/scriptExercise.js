const button = document.querySelector('.buttonExercise');
const input = document.querySelector('.inputExercise');

const box1 = document.querySelector('.box-1');
 


button.addEventListener('click', function(){
    const paragraph = document.createElement('p');
   
    paragraph.innerHTML = input.value;
    
    box1.appendChild(paragraph);
  

    input.value = "";
})