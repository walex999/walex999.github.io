function redirect(link) {
    window.location.href = link;
}

function scrollToSection(event) {
    event.preventDefault(); // Prevent default link behavior
    const targetId = this.getAttribute('href'); // Get the target section id
    const targetSection = document.querySelector(targetId); // Get the target section
    console.log(targetId,targetSection);
    if (targetSection) {
        // Scroll to the target section with smooth behavior
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Add event listeners to navbar links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', scrollToSection);
});