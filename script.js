document.addEventListener('DOMContentLoaded', () => {
    const helpIcon = document.getElementById('help-icon');
    const popup = document.querySelector('.popup');
    const form = document.querySelector('.form');
    const closeIcon = document.querySelector('.close-icon');
    const submitButton = document.querySelector('.text');
    const video = document.getElementById('video-background');
    
    video.volume = 0.3; // 20% of the full volume

    // Show popup with fade-in animation and hide form
    helpIcon.addEventListener('click', () => {
        popup.classList.remove('fade-out');
        popup.classList.add('fade-in');
        form.style.display = 'none'; 
    });

    // Close popup with fade-out animation and show form
    const closePopup = () => {
        popup.classList.remove('fade-in');
        popup.classList.add('fade-out');
        // Delay showing the form until after animation ends
        setTimeout(() => {
            form.style.display = 'flex'; 
        }, 300); // Match the animation duration
    };

    closeIcon.addEventListener('click', closePopup);

    submitButton.addEventListener('click', closePopup);

    // Hide popup if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (!popup.contains(event.target) && !helpIcon.contains(event.target)) {
            closePopup();
        }
    });
});
