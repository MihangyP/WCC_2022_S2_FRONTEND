//loader

const loader = function () {
    document.querySelector('.loader-container')
    .classList.add('fade-out');
}

const fadeOut = function () {
    setInterval(loader, 4000);
}

window.addEventListener('load', fadeOut);



//------------------------------------



const categories = document.querySelectorAll('ul li');

for (let i = 0; i < categories.length; i++) {
    const category = categories[i] ;

    const active = function () {
        this.parentNode.querySelector('.active').classList.remove('active');

        if(this.classList.contains('active')) return;
        else this.classList.add('active');
        
    }

    category.addEventListener('click', active);
}
