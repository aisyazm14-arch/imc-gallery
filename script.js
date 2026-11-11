const toggleBtn = document.getElementById('toggle-sidebar-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const icon = document.getElementById('toggle-icon')

toggleBtn.addEventListener('click', () => {
    sidebarWrapper.classList.toggle('hidden');
    if (sidebarWrapper.classList.contains('hidden')) {
        icon.classList.remove('fa-arrows-left-right');
        icon.classList.add('fa-arrows-right');
    } else {
        icon.classList.remove('fa-arrows-right');
        icon.classList.add('fa-arrows-left-right');
    }
});