let map;
let markers = [];
let rankedCompanies = [];

// Format market cap for display
function formatMarketCap(value) {
    if (value >= 1000000000000) {
        return '$' + (value / 1000000000000).toFixed(2) + 'T';
    } else if (value >= 1000000000) {
        return '$' + (value / 1000000000).toFixed(2) + 'B';
    } else if (value >= 1000000) {
        return '$' + (value / 1000000).toFixed(2) + 'M';
    }
    return '$' + value.toFixed(2);
}

// Calculate total market cap
function calculateTotalMarketCap() {
    const total = companies.reduce((sum, company) => sum + company.marketCap, 0);
    return formatMarketCap(total);
}

// Sort companies by market cap and assign ranks
function rankCompanies() {
    rankedCompanies = [...companies].sort((a, b) => b.marketCap - a.marketCap);
    rankedCompanies.forEach((company, index) => {
        company.rank = index + 1;
    });
    return rankedCompanies;
}

function initMap() {
    const siliconValley = [37.3861, -122.0839];
    
    map = L.map('map').setView(siliconValley, 10);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors © CARTO',
        maxZoom: 19
    }).addTo(map);

    // Rank companies
    rankCompanies();
    
    // Update total market cap
    document.getElementById('total-market-cap').textContent = '$22T';

    // Add markers
    rankedCompanies.forEach((company) => {
        addMarker(company);
    });

    // Fit map to show all markers
    setTimeout(() => {
        if (markers.length > 0) {
            const markerLeafletObjects = markers.map(m => m.marker);
            const group = L.featureGroup(markerLeafletObjects);
            map.fitBounds(group.getBounds().pad(0.1));
        }
    }, 500);
}

function addMarker(company) {
    const color = sectorColors[company.sector] || "#667eea";
    
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
            <div class="marker-container">
                <div class="marker-pin" style="border-color: ${color};" data-company="${company.name}">
                    <img src="${company.logo}" alt="${company.name}" 
                         onerror="this.style.display='none';"
                         class="company-logo">
                    <div class="rank-badge">#${company.rank}</div>
                </div>
            </div>
        `,
        iconSize: [50, 60],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50]
    });

    const marker = L.marker([company.lat, company.lng], {
        icon: customIcon,
        title: company.name
    }).addTo(map);

    // Store reference
    const markerObj = {
        marker: marker,
        company: company,
        element: null
    };
    markers.push(markerObj);

    // Get DOM element after marker is added
    setTimeout(() => {
        const markerElements = document.querySelectorAll(`[data-company="${company.name}"]`);
        if (markerElements.length > 0) {
            markerObj.element = markerElements[0];
            
            // Hover events
            markerObj.element.addEventListener('mouseenter', (e) => {
                showHoverTooltip(company, markerObj.element);
            });
            
            markerObj.element.addEventListener('mouseleave', () => {
                hideHoverTooltip();
            });
            
            // Click event
            markerObj.element.addEventListener('click', (e) => {
                e.stopPropagation();
                showCompanyModal(company);
            });
        }
    }, 200);
}

// Hover Tooltip Functions
function showHoverTooltip(company, markerElement) {
    const tooltip = document.getElementById('hover-tooltip');
    const color = sectorColors[company.sector] || "#667eea";
    
    document.getElementById('tooltip-logo').src = company.logo;
    document.getElementById('tooltip-rank').textContent = `#${company.rank}`;
    document.getElementById('tooltip-name').textContent = company.name;
    document.getElementById('tooltip-marketcap').textContent = formatMarketCap(company.marketCap);
    
    const sectorBadge = document.getElementById('tooltip-sector');
    sectorBadge.textContent = company.sector;
    sectorBadge.style.background = color;
    
    tooltip.classList.remove('hidden');
    tooltip.style.opacity = '1';
    
    // Position tooltip ABOVE the pin
    setTimeout(() => {
        positionTooltipAboveMarker(tooltip, markerElement);
    }, 10);
}

function positionTooltipAboveMarker(tooltip, markerElement) {
    const markerRect = markerElement.getBoundingClientRect();
    const tooltipWidth = 280;
    const tooltipHeight = tooltip.offsetHeight || 200;
    
    // Calculate position above the marker
    let left = markerRect.left + (markerRect.width / 2) - (tooltipWidth / 2);
    let top = markerRect.top - tooltipHeight - 15; // 15px gap above pin
    
    // Keep tooltip on screen - horizontal bounds
    const padding = 10;
    if (left < padding) {
        left = padding;
    } else if (left + tooltipWidth > window.innerWidth - padding) {
        left = window.innerWidth - tooltipWidth - padding;
    }
    
    // Keep tooltip on screen - vertical bounds
    if (top < padding) {
        // If it doesn't fit above, show below instead
        top = markerRect.bottom + 15;
    }
    
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
}

function hideHoverTooltip() {
    const tooltip = document.getElementById('hover-tooltip');
    tooltip.style.opacity = '0';
    setTimeout(() => {
        tooltip.classList.add('hidden');
    }, 200);
}

function showCompanyModal(company) {
    const modal = document.getElementById("company-modal");
    const color = sectorColors[company.sector] || "#667eea";
    
    document.getElementById("modal-name").innerHTML = `
        <img src="${company.logo}" alt="${company.name}" 
             onerror="this.style.display='none';"
             style="width: 50px; height: 50px; vertical-align: middle; margin-right: 10px; border-radius: 8px; object-fit: contain; background: white; padding: 5px;">
        #${company.rank} - ${company.name}
    `;
    document.getElementById("modal-ticker").textContent = company.ticker;
    document.getElementById("modal-marketcap").textContent = formatMarketCap(company.marketCap);
    document.getElementById("modal-industry").innerHTML = `<span style="background: ${color}; color: white; padding: 5px 10px; border-radius: 5px;">${company.sector}</span>`;
    document.getElementById("modal-address").textContent = company.address;
    document.getElementById("modal-website").href = company.website;
    
    modal.classList.remove("hidden");
    modal.classList.add("show");
}

// Initialize everything on page load
document.addEventListener("DOMContentLoaded", function() {
    // Modal close handlers
    const modal = document.getElementById("company-modal");
    const closeBtn = document.querySelector(".close");
    
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.classList.remove("show");
            modal.classList.add("hidden");
        };
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove("show");
            modal.classList.add("hidden");
        }
    };

    // Initialize map
    initMap();
});
