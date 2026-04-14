function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

function riskClass(level) {
    if (!level) return 'risk-Unknown';
    return 'risk-' + level;
}

function renderProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        const img = document.createElement('img');
        img.className = 'product-image';
        img.alt = product.name;
        img.loading = 'lazy';
        // Try local product image first; fall back to a seeded placeholder if it fails
        img.src = product.image || ('https://picsum.photos/seed/' + encodeURIComponent(product.name) + '/400/300');
        img.onerror = function() {
            this.onerror = null;
            this.src = 'https://picsum.photos/seed/' + encodeURIComponent(product.name) + '/400/300';
        };

        const details = document.createElement('div');
        details.className = 'details';

        const h = document.createElement('h3');
        h.innerHTML = `${product.name} <span class="risk-badge ${riskClass(product.riskLevel)}">${product.riskLevel || 'Unknown'} Risk</span>`;

        const brand = document.createElement('p');
        brand.innerHTML = `<strong>Brand:</strong> ${product.brand}`;

        const flagged = document.createElement('div');
        flagged.className = 'chemical-list';
        const harmful = product.harmfulSubstances || [];
        if (harmful.length) {
            const list = harmful.map(s => `<li><strong>${s.name}:</strong> ${s.effect}</li>`).join('');
            flagged.innerHTML = `<strong>⚠️ Flagged Ingredients:</strong><ul>${list}</ul>`;
        } else {
            flagged.innerHTML = `<strong>⚠️ Flagged Ingredients:</strong> <span>None flagged</span>`;
        }

        const altBox = document.createElement('div');
        altBox.className = 'alternative-box';
        const alts = product.saferAlternatives || [];
        altBox.innerHTML = `<strong>✅ Better Choices:</strong> ${alts.length ? alts.map(a => `${a.name} ${a.brand ? '('+a.brand+')' : ''}`).join(', ') : 'No suggestions available'}`;

        const source = document.createElement('div');
        if (product.source) {
            const a = document.createElement('a');
            a.className = 'source-link';
            a.href = product.source;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.innerHTML = 'View label ↗';
            source.appendChild(a);
        }

        details.appendChild(h);
        details.appendChild(brand);
        details.appendChild(flagged);
        details.appendChild(altBox);
        if (source) details.appendChild(source);

        card.appendChild(img);
        card.appendChild(details);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const catParam = getQueryParam('cat');
    const titleEl = document.getElementById('categoryTitle');
    const searchEl = document.getElementById('productSearch');

    if (!catParam) {
        titleEl.textContent = 'Category not specified';
        document.getElementById('product-container').textContent = 'No category selected.';
        return;
    }

    const category = decodeURIComponent(catParam);
    titleEl.textContent = category;

    const data = window.products && window.products[category];
    if (!data) {
        document.getElementById('product-container').textContent = 'No products found for this category.';
        return;
    }

    // initial render
    renderProducts(data);

    // search filter
    if (searchEl) {
        searchEl.addEventListener('input', (e) => {
            const q = e.target.value.trim().toLowerCase();
            if (!q) return renderProducts(data);
            const filtered = data.filter(p => (p.name + ' ' + p.brand).toLowerCase().includes(q));
            renderProducts(filtered);
        });
    }
});
