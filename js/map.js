// ==================== MAP VIEW MODULE ====================

const MapView = {

    map: null,
    markers: [],

    /**
     * Initialize the Leaflet map. Called once on app startup.
     */
    init() {
        const container = document.getElementById('map');
        if (!container) {
            console.warn('Map container not found');
            return;
        }

        // Center on continental USA, zoomed out
        this.map = L.map('map', {
            center: [39.8283, -98.5795],
            zoom: 4,
            scrollWheelZoom: true
        });

        // OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(this.map);

        // Fix rendering glitch when map is inside hidden/sticky container
        setTimeout(() => this.map.invalidateSize(), 100);
    },

    /**
     * Replace all markers with ones for the given properties.
     * Auto-fits bounds to show them all.
     * @param {Array} properties
     */
    updateMarkers(properties) {
        if (!this.map) return;

        // Remove existing markers
        this.markers.forEach(m => this.map.removeLayer(m));
        this.markers = [];

        // Nothing to show — reset view
        if (!properties.length) {
            this.map.setView([39.8283, -98.5795], 4);
            return;
        }

        const bounds = [];

        properties.forEach(p => {
            const marker = L.marker([p.lat, p.lng], {
                title: p.title
            })
                .addTo(this.map)
                .bindPopup(this.popupTemplate(p), {
                    maxWidth: 240,
                    minWidth: 200
                });

            this.markers.push(marker);
            bounds.push([p.lat, p.lng]);
        });

        // Auto-zoom to fit all visible markers
        if (bounds.length === 1) {
            // Single marker — center and zoom in
            this.map.setView(bounds[0], 12);
        } else {
            this.map.fitBounds(bounds, { padding: [40, 40], maxZoom: 12 });
        }
    },

    /**
     * HTML for a marker popup.
     * @param {Object} p
     * @returns {string}
     */
    popupTemplate(p) {
        const priceLabel = Utils.priceLabel(p);
        return `
            <div class="map-popup">
                <img
                    src="${p.image}"
                    alt="${Utils.escapeHtml(p.title)}"
                    class="map-popup-img"
                >
                <div class="map-popup-body">
                    <strong class="map-popup-title">${Utils.escapeHtml(p.title)}</strong>
                    <span class="map-popup-price">${priceLabel}</span>
                    <span class="map-popup-location">📍 ${Utils.escapeHtml(p.location)}</span>
                    <button
                        type="button"
                        class="map-popup-btn"
                        onclick="MapView.viewDetails(${p.id})"
                    >
                        View Details
                    </button>
                </div>
            </div>
        `;
    },

    /**
     * Called when a user clicks "View Details" inside a popup.
     * For now it just logs + shows toast — the real modal hooks in on Day 5.
     * @param {number} id
     */
    viewDetails(id) {
        const p = getPropertyById(id);
        if (!p) return;

        console.log('📍 Popup → View Details:', p);
        Utils.showToast(`Opening "${p.title}" — modal coming Day 5!`);
    }
};