const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
console.log("Connected");

menu.addEventListener('click', (e) => {

    if (nav.classList.contains('responsive')){
        nav.classList.remove('responsive');
    } else {
        nav.classList.add('responsive');
    }
    
    if (nav.classList.contains('hide')) {
        nav.classList.remove('hide');
        nav.classList.add('show');
    } else {
        nav.classList.remove('show');
        nav.classList.add('hide');
    }
    console.log("Click");
});
