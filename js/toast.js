const saveButtons = document.querySelectorAll('.save_signer');

saveButtons.forEach(saveButton => {
    saveButton.addEventListener('click', (e) => {
        e.preventDefault();

        const targetPanel = e.target.parentElement.parentElement;

        const toast = targetPanel.querySelector('.toast.save');
        toast.classList.add('active');
        $('.toast.save.active').toast({animation: true, delay: 1000});
        $('.toast.save.active').toast('show');

        $('.toast').on('shown.bs.toast', function(){
            setTimeout(() => {
                toast.classList.add('hide_toast');
            }, 800);
        });
        
        $('.toast').on('hidden.bs.toast', function(){
            toast.classList.remove('active');
            toast.classList.remove('hide_toast');
        });
    });
});

