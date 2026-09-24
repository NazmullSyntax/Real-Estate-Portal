// ==================== LISTINGS RENDERING ====================

const Listings = {

    grid: null,
    countEl: null,

    /**
     * Grab DOM references once
     */
    init() {
        this.grid = document.getElementById('listingsGrid');
        this.countEl = document.getElementById('listingCount');
    },

    /**
     * Render an array of properties into the grid
     * @param {Array} properties
     */
    render(properties) {
        // Update count badge
        this.countEl.textContent = `(${properties.length} ${properties.length === 1 ? 'property' : 'properties'} found)`;

        // Empty state
        if (properties.length === 0) {
            this.grid.innerHTML = `
                <div class="no-results">
                    <h3>😕 No properties found</h3>
                    <p>Try adjusting your filters or search criteria</p>
                </div>
            `;
            return;
        }

        // Render all cards
        this.grid.innerHTML = properties
            .map(property => this.cardTemplate(property))
            .join('');
    },

    /**
     * Return HTML string for a single property card
     * @param {Object} property
     * @returns {string}
     */
    cardTemplate(property) {
        const priceLabel = Utils.priceLabel(property);
        const badge = property.purpose === 'sale' ? 'For Sale' : 'For Rent';

        return `
            <div class="property-card" data-id="${property.id}">
                <div class="property-image">
                    <img
                        src="${property.image}"
                        alt="${Utils.escapeHtml(property.title)}"
                        loading="lazy"
                    >
                    <span class="property-badge">${badge}</span>
                    <span class="property-price">${priceLabel}</span>
                </div>
                <div class="property-info">
                    <div class="property-title">${Utils.escapeHtml(property.title)}</div>
                    <div class="property-location">📍 ${Utils.escapeHtml(property.address)}</div>
                    <div class="property-features">
                        <span>🛏️ ${property.bedrooms} Beds</span>
                        <span>🛁 ${property.bathrooms} Baths</span>
                        <span>📐 ${property.area.toLocaleString()} sqft</span>
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * Attach a click handler to the grid (event delegation).
     * For now just logs — will open modal on Day 6.
     */
    bindClicks() {
        this.grid.addEventListener('click', (e) => {
            const card = e.target.closest('.property-card');
            if (!card) return;

            const id = Number(card.dataset.id);
            const property = getPropertyById(id);

            // Placeholder — modal will hook in on Day 6
            console.log('🖱️ Card clicked:', property);
            Utils.showToast(`Opening "${property.title}" — coming soon!`);
        });
    }
};