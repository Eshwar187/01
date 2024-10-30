function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    const services = document.querySelectorAll('.service-content');
    services.forEach(service => service.style.display = 'none');

    document.getElementById(sectionId).classList.add('active');
}

function showService(serviceId) {
    const services = document.querySelectorAll('.service-content');
    services.forEach(service => service.style.display = 'none');
    
    document.getElementById(serviceId).style.display = 'block';
}
