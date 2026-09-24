document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize modules
    Listings.init();
    Filters.init();
    MapView.init();

    // 2. Initial render — show all properties
    Listings.render(PROPERTIES);
    Listings.bindClicks();
    MapView.updateMarkers(PROPERTIES);

    // 3. Header button placeholders
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