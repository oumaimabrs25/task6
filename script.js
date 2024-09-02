document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.projects img');

    projects.forEach(project => {
        project.addEventListener('mouseover', () => {
            project.style.transform = 'scale(1.1)';
        });

        project.addEventListener('mouseout', () => {
            project.style.transform = 'scale(1)';
        });
    });
});