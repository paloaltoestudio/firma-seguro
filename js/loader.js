const loaderTrigger = document.querySelector('.loader_trigger');
const loader = document.querySelector('.loader');

loaderTrigger.addEventListener('click', e => {
    e.preventDefault();

    loader.classList.remove('d-none');
    loader.classList.add('active');

    setTimeout(() => {
        loader.classList.add('d-none');  
        loader.classList.remove('active');  
    }, 2000)
})