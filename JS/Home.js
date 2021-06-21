let Menu =document.querySelector('#menu-Bar-icon');
let Nav_Bar =document.querySelector('.horizontal-Nav');
let Header =document.querySelector('.nav-Bar');

Menu.addEventListener('click',() => {
    Menu.classList.toggle('fa-times');
    Nav_Bar.classList.toggle('active');
});

window.onscroll=()=>{
    Menu.classList.remove('fa-times');
    Nav_Bar.classList.remove('active');

    if (window.scrollY>150){Header.classList.add('active');} 
    else{Header.classList.remove('active');}
}