const closeTrigger = document.querySelectorAll('.close a');
const overlay = document.querySelector('.body_overlay');
let panel = document.querySelector('.panel.open');

const pdfTriggers = document.querySelectorAll('.pdfTrigger');

Array.from(closeTrigger).map( close => {
    close.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.closest('.panel').classList.remove('open');
        overlay.classList.remove('active');
    });
});

overlay.addEventListener('click', (e) => {
    e.preventDefault();
    panel.classList.remove('open');
    overlay.classList.remove('active');
});

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