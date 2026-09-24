// ==================== MAIN ENTRY POINT ====================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🏠 Real Estate Portal loaded successfully — Day 1 complete!');

    // Placeholder — full logic will be added Day 3+
});
// ==================== MAIN ENTRY POINT ====================

document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize modules
    Listings.init();

    // 2. Initial render — show all properties
    Listings.render(PROPERTIES);
    Listings.bindClicks();

    // 3. Header button placeholders (real features coming later)
    document.getElementById('loginBtn').addEventListener('click', () => {
        Utils.showToast('Login feature coming soon!');
    });

    document.getElementById('signupBtn').addEventListener('click', () => {
        Utils.showToast('Sign up feature coming soon!');
    });

    document.getElementById('contactLink').addEventListener('click', (e) => {
        e.preventDefault();
        Utils.showToast('Contact page coming soon!');
    });

    // 4. Nav scroll links
    document.querySelectorAll('[data-scroll]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            Utils.scrollTo('#listingsSection');
        });
    });

    console.log(`🏠 Real Estate Portal loaded — ${PROPERTIES.length} properties available`);
});