function redirect(link) {
    window.location.href = link;
}

function scrollToSection(event) {
    event.preventDefault(); // Prevent default link behavior
    const targetId = this.getAttribute('href'); // Get the target section id
    const targetSection = document.querySelector(targetId); // Get the target section
    if (targetSection) {
        if (targetId =='#index'){
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
              });
        }
        // Scroll to the target section with smooth behavior
        else{
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to navbar links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', scrollToSection);
    });
});