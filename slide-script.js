
/**
 * displays pic denoted by index
 */
function showPic(){
    var index = 0;
    var imageArr = document.querySelectorAll('img');
    var next_button = document.getElementById('next');
    var prev_button = document.getElementById('previous');
    console.log(imageArr[0]);
    imageArr[0].classList.remove('pics');
    next_button.addEventListener('click', () => {
        if(index == 4){
            imageArr[index].classList.add('pics');
            index = 0;
            imageArr[index].classList.remove('pics');
        }
        else{
            imageArr[index].classList.add('pics');
            index++;
            imageArr[index].classList.remove('pics');
        }
    });
    prev_button.addEventListener('click', () => {
        if(index == 0){
            imageArr[index].classList.add('pics')
            index = 4;
            imageArr[index].classList.remove('pics');
        }
        else{
            imageArr[index].classList.add('pics');
            index--;
            imageArr[index].classList.remove('pics');
        }
    });
}
showPic();