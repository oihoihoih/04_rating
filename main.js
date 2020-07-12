var hearts = document.getElementsByClassName('heart_out');
var rating = document.getElementById('rating');
var main = document.getElementById('main');


rating.addEventListener('mouseover', plain);
rating.addEventListener('mouseout', empty);
main.addEventListener('click', clicked);


function clicked(){
    console.log('click');
    empty();  
    if (event.target.closest('.heart_out')){  
        plain(event);
        document.getElementById('rating').removeEventListener('mouseout', empty);
    }
    else {
        document.getElementById('rating').addEventListener('mouseout', empty);    
    }
}

function plain(){
    console.log('mouseover');
    var i = 0;

    let event = arguments[0];

    if (event.target.closest('.heart_out')){
        console.log(event.target.id);
        let tocado = event.target.id;
        let anterior = hearts[i].id;
        
        while(anterior!= tocado) {
        console.log(anterior)
        hearts[i].classList.add("heart_plain");
        i++
        anterior = hearts[i].id;
        } 
        hearts[i].classList.add("heart_plain");
    }    
}

function empty(){
    console.log('mouseout');
    let plain = document.getElementsByClassName('heart_plain');
    let length = plain.length - 1;

    if (plain.length > 0){
       for (let j=plain.length; j>0; j--){
            plain[length].classList.remove('heart_plain');
            length --;
        }
    }
}
