document.querySelectorAll('.step-toggle').forEach(toggle => {
    toggle.addEventListener('click', function() {
        const content = this.nextElementSibling;

        content.classList.toggle('show');
    });
});

document.querySelectorAll('.step-toggle').forEach(toggle => {
    toggle.addEventListener('click', function() {
        const content = this.nextElementSibling; 

        if (content.style.display === 'block') {
            content.style.display = 'none'; 
            content.classList.toggle('show');
        } else {
            content.style.display = 'block'; 
            content.classList.toggle('show');
        }
    });
});