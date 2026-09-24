// ==================== UTILITY FUNCTIONS ====================
// Reusable helpers used across the Real Estate Portal

const Utils = {

    /**
     * Format a number as USD currency
     * @param {number} value
     * @returns {string} e.g. "$450,000"
     */
    formatPrice(value) {
        return '$' + Number(value).toLocaleString('en-US');
    },

    /**
     * Debounce — delays execution until after `delay` ms of silence.
     * Useful for search inputs.
     * @param {Function} fn
     * @param {number} delay
     */
    debounce(fn, delay = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, args), delay);
        };
    },

    /**
     * Show a toast notification
     * @param {string} message
     * @param {'success'|'error'} type
     */
    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        if (!toast) return;

        toast.textContent = message;
        toast.className = 'toast show' + (type === 'error' ? ' error' : '');

        setTimeout(() => {
            toast.className = 'toast';
        }, 3500);
    },

    /**
     * Escape HTML to prevent XSS
     * @param {string} str
     * @returns {string}
     */
    escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = String(str);
        return div.innerHTML;
    },

    /**
     * Smooth scroll to an element
     * @param {string} selector
     */
    scrollTo(selector) {
        const el = document.querySelector(selector);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    },

    /**
     * Format rent prices with a "/mo" suffix
     * @param {Object} property
     * @returns {string}
     */
    priceLabel(property) {
        const base = this.formatPrice(property.price);
        return property.purpose === 'rent' ? `${base}/mo` : base;
    }
};