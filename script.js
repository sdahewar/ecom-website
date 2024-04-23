const bar = document.getElementById('bar');
const close = document.getElementById('close');

const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

// const searchBox = document.querySelector('.search-box');
// const searchBtn = document.querySelector('.search-btn');
// const search = document.querySelector('.search');
// const closeBtn = document.querySelector('.close-box');

// searchBtn.addEventListener('click', function(){
//     console.log(search.classList.contains('active'))
//     if(search.classList.contains('active')){
//         searchBox.value = ''
//     }
//     else{
//         search.classList.add('active');
//         searchBox.focus();
//     }
// })

// closeBtn.addEventListener('click', function(){
//     search.classList.remove('active');
//     searchBox.value = '';
// })