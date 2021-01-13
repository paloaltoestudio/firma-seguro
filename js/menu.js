const menuTrigger = document.querySelector('.menu_trigger');
const menuTriggerIcon = document.querySelector('.menu_trigger i');
const sidebar = document.querySelector('.sidebar');

menuTrigger.addEventListener('click', e => {
    e.preventDefault();
    menuTriggerIcon.classList.toggle('fa-times');
    menuTrigger.classList.toggle('active');
    sidebar.classList.toggle('active');
})