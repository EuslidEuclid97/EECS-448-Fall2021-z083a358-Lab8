
/**
 * changes colors of border and background
 */
function changeColors(){
    var colorButton = document.querySelector('button');
    var bordColorOrWidth = '';
    var backColor = '';
    colorButton.addEventListener('click', event =>{
        bordColorOrWidth = document.getElementById('Border Color or Width').value;
        backColor = document.getElementById('Background Color').value;
        if(backColor == 'FF0000' || backColor == '008000' || backColor == '0000FF'){//red, green, or blue
            document.body.style.backgroundColor = '#'+backColor;
        }
        else{//any other background color/value
            alert('Valid background colors are: red, blue, or green');
        }
        if(bordColorOrWidth == 'FF0000' || bordColorOrWidth == '008000' || bordColorOrWidth == '0000FF'){
            //document.getElementById('quote').classList.remove('none');
            document.getElementById('quote').style.borderColor = '#'+bordColorOrWidth;
        }
        else if(bordColorOrWidth[bordColorOrWidth.length-1]=='x' && bordColorOrWidth[bordColorOrWidth.length-2]=='p'){
            //document.getElementById('quote').classList.remove('none');
            document.getElementById('quote').style.borderWidth = bordColorOrWidth;
        }
        else{
            alert('Valid border colors are: red, blue, or green; valid border widths are proceeded by px');
        }
        event.preventDefault();
    });
}
changeColors();