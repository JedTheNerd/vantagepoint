const modal = document.getElementById('modal');
const triggers = document.querySelectorAll('.trigger-modal');
const closeBtn = document.querySelector('.close-modal');

// Open Modal
triggers.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

// Close Modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close on background click
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});
