const closeTrigger = document.querySelectorAll('.close a');
const overlay = document.querySelector('.body_overlay');
let panel = document.querySelector('.panel.open');

const pdfTriggers = document.querySelectorAll('.pdfTrigger');


if(closeTrigger){
    Array.from(closeTrigger).map( close => {
        close.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.closest('.panel').classList.remove('open');
            overlay.classList.remove('active');
        });
    });
}

if(overlay){
    overlay.addEventListener('click', (e) => {
        e.preventDefault();
        panel.classList.remove('open');
        overlay.classList.remove('active');
    });
}

if(pdfTriggers){
    Array.from(pdfTriggers).map(pdfTrigger => {
        pdfTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            const pdfPanelClass = e.target.closest('a').getAttribute("href");
            const pdfPanel = document.querySelector('.' + pdfPanelClass);
            pdfPanel.classList.add('open');
            overlay.classList.add('active');
            return panel = document.querySelector('.panel.open');
        });
    })
}


let editTriggers = document.querySelectorAll('.edit');
editTriggers = Array.from(editTriggers);

if(editTriggers){
    editTriggers.map(editTrigger => {
        editTrigger.addEventListener('click', (e) => {
                e.preventDefault();
    
                let targetPanelName = e.target.getAttribute('href');
                let targetPanel = document.querySelector('.' + targetPanelName);
    
                if(!targetPanelName){
                    console.log(e.target.parentElement.getAttribute('href'));
                    targetPanelName = e.target.parentElement.getAttribute('href');
                    targetPanel = document.querySelector('.' + targetPanelName);
                } 
                
                targetPanel.classList.add('open');
                overlay.classList.add('active');
                return panel = document.querySelector('.panel.open');
        });
    });
}
