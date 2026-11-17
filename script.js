const toggleBtn = document.getElementById('toggle-sidebar-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const icon = document.getElementById('toggle-icon');
const loginModal = document.querySelector('.login-modal');
const profileBtn = document.getElementById('profile-btn');
const closeBtn = document.querySelector('.close-btn');

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

profileBtn.addEventListener('click', () => {
    loginModal.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    loginModal.classList.remove('show');
});

widow.addEventListener('click', (e) => {
    if (e.target === loginModal) {
    loginModal.classList.remove('show');
    }
});