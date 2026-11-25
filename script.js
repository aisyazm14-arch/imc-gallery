const SUPABASE_URL = 'https://issdtsguaapheovrjmap.supabase.co';
const SUPABASE_KEY = 'sb_publishable_PkaUaXsbre3tox4Qrlhnig_aVnm1X9S';
let supabaseClient = null;
try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
} catch (e) {
    console.error('Failed to initialize Supabase client:', e);
}
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const toggleBtn = document.getElementById('toggle-sidebar-btn');
const icon = document.getElementById('toggle-icon');
const loginModal = document.querySelector('.login-modal');
const profileBtn = document.getElementById('profile-btn');
const closeBtn = document.querySelector('.close-btn');
const formLogin = document.getElementById('form-login');

if(toggleBtn && sidebarWrapper && icon) {
    toggleBtn.addEventListener('click', () => {
        sidebarWrapper.classList.toggle('hidden');
        if (sidebarWrapper.classList.contains('hidden')) {
            icon.classList.remove('fa-arrows-left-right');
            icon.classList.add('fa-arrow-right');
        } else {
            icon.classList.remove('fa-arrow-right');
            icon.classList.add('fa-arrows-left-right');
        }
    });
}

if (profileBtn && loginModal) {
    profileBtn.addEventListener('click', () => {
        loginModal.classList.add('show');
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        loginModal.classList.remove('show');
    });
}

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
    loginModal.classList.remove('show');
    }
});

if (formLogin) {
    formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const { data,error } = await supabaseClient
            .from('users')
            .select("*")
            .eq('username', username)
            .eq('password', password)
            .single();
        if (error || !data) {
            alert("Username or password wrong!");
            console.log(error);
        } else {
            alert("Welcome, " + data.username + "!");
            localStorage.setItem('loggedInUser', JSON.stringify(data));
            document.querySelector('.login-modal').classList.remove('show');
            if (data.role === 'admin') {
                document.querySelector('.navbar-title').innerText = "IMC Gallery Admin";
            } else {
              document.querySelector('.navbar-title').innerText = "IMC Gallery";
            }
        }
    });
}