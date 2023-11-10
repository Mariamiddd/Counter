const button = document.querySelector('.btn');
const countednum = document.querySelector('.countednumber');
button.addEventListener('click', count);
function count(){
    let currentNum = parseInt(countednum.textContent);
    countednum.textContent = currentNum + 1;

}