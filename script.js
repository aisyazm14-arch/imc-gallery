const toggleBtn = document.getElementById('toggle-sidebar-btn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});