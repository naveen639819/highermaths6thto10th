let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector(".header .flex .navbar");
let navItem1 = document.querySelector(".navItem1");
let navItem2 = document.querySelector(".navItem2");
let navItem3 = document.querySelector(".navItem3");
let navItem4 = document.querySelector(".navItem4");

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}  

navItem1.onclick = () => { 
    menuBtn.click();
}  

navItem2.onclick = () => { 
    menuBtn.click();
}   

navItem3.onclick = () => { 
    menuBtn.click();
}  

navItem4.onclick = () => { 
    menuBtn.click();
}  

if (navbar.classList.contains("active")){
    
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzoGhzXTC5vAz40GQDB1IDCP9gBdbPWr44Im482JfUtgCOWSNd7NP9n1W_WI1I5X4hO/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })


var style = document.createElement('style');
var position = 'right';

style.innerHTML = `
@keyframes my-animation{
0%{${position}: -${document.querySelector('.text').offsetWidth + 10}px;}
100%{${position}:100%}


}`;

document.head.append(style);

