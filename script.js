const modal = document.getElementById('modal');
const triggers = document.querySelectorAll('.trigger-modal');
const closeBtn = document.querySelector('.close-modal');
const leadForm = document.querySelector('.lead-form'); // Target the form

// 1. Open Modal
triggers.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

// 2. Close Modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 3. Handle Form Submission & Redirect
if (leadForm) {
    leadForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop the page from refreshing
        
        // Optional: Here is where you'd send data to Formspree/Email
        // For now, we will simulate a successful send and redirect
        
        console.log("Form submitted successfully.");
        
        // REDIRECT LOGIC
        // This will send them to your thanks.html file in the same folder
        window.location.href = "thanks.html"; 
    });
}

// Close on background click
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});
