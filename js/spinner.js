const links = document.querySelectorAll('.spinner');
const spinner = document.querySelector('.spinner-border');


const spinnerHTML = `<div class='spinner-border spinner-border-sm' role='status'>
<span class='sr-only'>Loading...</span>
</div>`;

links.forEach(link => {

    link.addEventListener('click', e => {
            e.preventDefault();

            const form = link.parentElement;

            if(!link.classList.contains('disabled')){
                link.style.width = '50px';
                link.style.padding = '7px 0px';
                link.setAttribute('disabled','disabled');
                link.innerHTML = spinnerHTML;
                link.classList.add('disabled');

                if(form.tagName == 'FORM') {
                    form.submit();
                }
            }
        }
    )
})