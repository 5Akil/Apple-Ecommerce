


// slideShow 

const slideShowDivs = ()=>{

    for (i=1; i<= 5 ; i++) {
        const div= document.createElement('div');

        div.style.backgroundImage = `url(assets/images/slideshow/section-1-bg-${i}.jpg)`;

        i === 1 &&  div.classList.add('change');

        document.querySelector('.slideshow').appendChild(div);
    
    }
}
slideShowDivs();


const divs = document.querySelectorAll('.slideshow div');
let a = 0;
const slide = () =>{
    setInterval(
        () =>{
            a++
            const div= document.querySelector('.slideshow .change');
               
            div.classList.remove('change');
            if (a < divs.length) {
                div.nextElementSibling.classList.add('change');
            }else{
                divs[0].classList.add('change');
                a=0;
            }
        },3000)
}
slide();

// End of slideShow 