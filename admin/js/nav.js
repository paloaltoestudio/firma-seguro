const adminWrapper = document.querySelector('.admin_wrapper');
const adminNav = document.querySelector('.admin_nav');
const menuTexts = adminNav.querySelectorAll('span');
const dropdownIcon = document.querySelector('.dropdown-toggle');
const toggleExpand = document.querySelector('.toggle_expand');
const toggleExpandIcon = toggleExpand.querySelector('i');


const showMenuText = () => {
    if(outerWidth <= 991){
        toggleExpand.classList.add('d-none');
        menuTexts.forEach(menuText => menuText.classList.remove('d-none'));
    } else {
        toggleExpand.classList.remove('d-none');
        menuTexts.forEach(menuText => menuText.classList.add('d-none'));
        adminWrapper.classList.remove('active');
        toggleExpand.classList.remove('active_toggle');
        dropdownIcon.classList.remove('show');
        toggleExpandIcon.classList.add('fa-caret-right')
    }
}

showMenuText();

window.addEventListener('resize', () => {
    showMenuText();
})


toggleExpand.addEventListener('click', (e) => {
    e.preventDefault();
    toggleExpand.classList.toggle('active_toggle');
    toggleExpandIcon.classList.toggle('fa-caret-right')
    adminWrapper.classList.toggle('active');
    dropdownIcon.classList.toggle('show');
    menuTexts.forEach(menuText => menuText.classList.toggle('d-none'));
});



