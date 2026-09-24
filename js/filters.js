// ==================== FILTERS MODULE ====================

const Filters = {

    // DOM references — populated in init()
    els: {},

    /**
     * Grab DOM references and attach listeners.
     * Called once on app startup.
     */
    init() {
        this.els = {
            type:      document.getElementById('filterType'),
            purpose:   document.getElementById('filterPurpose'),
            bedrooms:  document.getElementById('filterBedrooms'),
            price:     document.getElementById('filterPrice'),
            location:  document.getElementById('filterLocation'),
            searchBtn: document.getElementById('searchBtn'),
            resetBtn:  document.getElementById('resetBtn')
        };

        // Live filtering on dropdown change
        ['type', 'purpose', 'bedrooms', 'location'].forEach(key => {
            this.els[key].addEventListener('change', () => this.apply());
        });

        // Debounced live filtering on price input
        this.els.price.addEventListener(
            'input',
            Utils.debounce(() => this.apply(), 300)
        );

        // Explicit search button (same as live filtering, but useful for UX)
        this.els.searchBtn.addEventListener('click', () => this.apply());

        // Reset
        this.els.resetBtn.addEventListener('click', () => this.reset());
    },

    /**
     * Read current filter values, filter PROPERTIES, re-render.
     */
    apply() {
        const type      = this.els.type.value;
        const purpose   = this.els.purpose.value;
        const bedrooms  = this.els.bedrooms.value;
        const maxPrice  = this.els.price.value;
        const location  = this.els.location.value;

        const filtered = PROPERTIES.filter(p => {
            if (type !== 'all' && p.type !== type) return false;
            if (purpose !== 'all' && p.purpose !== purpose) return false;
            if (bedrooms !== 'all' && p.bedrooms < Number(bedrooms)) return false;
            if (maxPrice && p.price > Number(maxPrice)) return false;
            if (location !== 'all' && p.location !== location) return false;
            return true;
        });

        // Re-render listings
        Listings.render(filtered);

        // (Map sync will be added on Day 4)

        // Update visual state of filter card
        this.updateActiveIndicator(filtered.length);
    },

    /**
     * Reset every filter back to "all"/empty and re-render everything.
     */
    reset() {
        this.els.type.value      = 'all';
        this.els.purpose.value   = 'all';
        this.els.bedrooms.value  = 'all';
        this.els.price.value     = '';
        this.els.location.value  = 'all';

        this.apply();

        Utils.showToast('✅ Filters reset successfully!');
    },

    /**
     * Add a subtle visual hint when filters are active.
     * (Optional polish — pure CSS is also fine.)
     */
    updateActiveIndicator(resultCount) {
        const section = document.querySelector('.search-section');
        const isFiltered = this.isAnyFilterActive();

        if (isFiltered) {
            section.style.border = '2px solid var(--accent)';
        } else {
            section.style.border = 'none';
        }
    },

    /**
     * Returns true if any filter differs from its default.
     */
    isAnyFilterActive() {
        return (
            this.els.type.value !== 'all' ||
            this.els.purpose.value !== 'all' ||
            this.els.bedrooms.value !== 'all' ||
            this.els.price.value !== '' ||
            this.els.location.value !== 'all'
        );
    }
};